import './App.css'
import {useEffect, useState} from "react";
import {Location} from "./interface.ts";
import {FolderIcon, LocationIcon} from "./icon.tsx";

function App() {
    const [data, setData] = useState<Location[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try{
                const response = await fetch('https://mocki.io/v1/19a31b45-6588-4ee5-8520-d5de693ea9eb')
                const data = await response.json()
                setData(data)
                setIsLoading(false)
            } catch (e) {
                setIsLoading(false)
                console.error(e)
            }
        }
        fetchData()
    }, [data.length]);

    function showSubTree(node: Location | null, level: number) {
        if (!node || node.locations.length === 0) {
            return;
        } else {
            return <div className={"ml-4"}>
                {level == 0 && <div className={"flex items-center gap-x-2"}>
                    {node.is_area && <FolderIcon/>}
                    <p>{node.label}</p>
                </div>}
                {node.locations.map((child) => {
                    return <div>
                        <div className={"ml-8 mt-1 flex items-center gap-x-2"}>
                        {child.is_area ? <FolderIcon/> : <LocationIcon/>}
                            <p>{child.label}</p>
                        </div>
                        {showSubTree(child, level + 1)}
                    </div>
                })}
            </div>
        }
    }

    return (
        <>
            <div>
                {isLoading ? <p>Loading...</p> :
                    data.map((location) => {
                        return showSubTree(location, 0)
                })
            }
        </div>
    </>
  )
}

export default App
