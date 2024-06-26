import {useEffect, useState} from "react";
import {useLocation} from "../contexts/LocationContextProvider.tsx";
import {LocationResponse} from "../interface.ts";
import Navigation from "../components/Navigation.tsx";
import CustomDndTree from "../components/custom_draggable/CustomDndTree.tsx";
// import { TouchBackend } from 'react-dnd-touch-backend';

function HomePage() {
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // const Backend = isMobile ? TouchBackend : HTML5Backend;
    const {getLocations, isLocationLoading} = useLocation()
    const [dataLocation, setDataLocation] = useState<LocationResponse[]>([])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getLocations("https://mocki.io/v1/a9ea0ff1-334b-4a18-a6ce-d1e5c6537095")
            setDataLocation(data)
        }

        fetchData()
    }, []);


    return (
        <>
            <Navigation />
            <p className={"ml-8 mt-8 italic"}>Show max parent is 3 and show max child is 5</p>
            {isLocationLoading ? <div>Loading...</div>  :
                <CustomDndTree locationData={dataLocation}
                               className={"h-full max-h-[600px] ml-8 mt-8 overflow-y-scroll small-scrollbar w-fit pr-6 shadow border p-2"}/>
            }
        </>
    );
}

export default HomePage;
