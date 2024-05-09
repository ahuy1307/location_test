import {createContext, ReactNode, useContext, useState} from "react";
import {LocationResponse} from "../interface.ts";

type LocationType =  {
    getLocations: (url: string) => Promise<LocationResponse[]>,
    isLocationLoading: boolean
}

const LocationContext = createContext({} as LocationType)

export function useLocation() {
    return useContext(LocationContext)
}

function LocationContextProvider({children}: {children: ReactNode}) {
    const [isLocationLoading, setIsLocationLoading] = useState(false)

    const getLocations = async (url: string) => {
        setIsLocationLoading(true)

        try {
            const response = await fetch(url)
            const data = await response.json()
            setIsLocationLoading(false)
            return data
        } catch (e) {
            console.log(e)
            setIsLocationLoading(false)
        }

        return []
    }

    return <LocationContext.Provider value={{getLocations, isLocationLoading}}>
        {children}
    </LocationContext.Provider>
}

export default LocationContextProvider