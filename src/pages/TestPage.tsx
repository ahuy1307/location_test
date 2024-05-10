import {useLocation} from "../contexts/LocationContextProvider.tsx";
import { useState} from "react";
import {LocationResponse} from "../interface.ts";
import CustomDndTree from "../components/custom_draggable/CustomDndTree.tsx";
import Navigation from "../components/Navigation.tsx";
import {twMerge} from "tailwind-merge";

function TestPage() {
    const {getLocations, isLocationLoading} = useLocation()
    const [dataLocation, setDataLocation] = useState<LocationResponse[]>([])
    const [showTree, setShowTree] = useState(false)

    const handleShowTree = async () => {
        if(dataLocation.length > 0) {
            setShowTree(!showTree)
            return
        }

            //You can change the URL to show another data tree
        const data = await getLocations("https://mocki.io/v1/ad5e9ede-ac6c-453e-9599-ea7489357b24")
        setDataLocation(data)

        setShowTree(!showTree)
    }


    return (
        <>
            <Navigation/>
            <div className={"flex flex-col items-start p-4 gap-y-2"}>
                <button className={"bg-black text-white hover:bg-gray-500 rounded-md px-4 py-2 transition-all duration-300"} onClick={() => handleShowTree()}>
                    {!showTree ? "View Tree" : "Hide Tree"}
                </button>
                {isLocationLoading ? <div>Loading...</div>  :
                    <div className={twMerge(`origin-top opacity-0`, showTree && `opacity-100 transition-all duration-300`)}>
                        <CustomDndTree locationData={dataLocation}
                                       className={"h-full max-h-[500px] overflow-y-scroll small-scrollbar w-fit pr-10 shadow border p-2"}/>
                    </div>
                }
            </div>
        </>
    );
}

export default TestPage;