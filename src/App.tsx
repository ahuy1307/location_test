import './App.css'
import {useEffect, useState} from "react";
import {Location} from "./interface.ts";
import TreeNode from "./components/TreeNode.tsx";
import {DragDropContext} from 'react-beautiful-dnd';

function App() {
    const [data, setData] = useState<Location[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if(data.length > 0) return;

        const fetchData = async () => {
            setIsLoading(true)
            try{
                const response = await fetch('https://mocki.io/v1/f1239b6d-8f43-45ab-be1a-d06c9bc6ab34')
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



    // function find(droppableId: number, indexes: number[], data: Location[]) {
    //     let droppableData:Location;
    //     let sourceData:Location;
    //     const [sourceIndex, destinationIndex] = indexes;
    //
    //     for (let i = 0; i < data.length; i++) {
    //         if(data[i].id == droppableId) {
    //             droppableData = data[i];
    //             sourceData = droppableData.locations[sourceIndex];
    //             break;
    //         }
    //         if(data[i].locations) {
    //             find(droppableId, indexes, data[i].locations);
    //         }
    //     }
    //
    //     const copyData = [...data];
    //
    //     copyData.map((location) => {
    //         if(location.id == droppableId) {
    //             location.locations.splice(sourceIndex, 1);
    //             location.locations.splice(destinationIndex, 0, sourceData);
    //         }
    //         if(location.locations) {
    //             find(droppableId, indexes, location.locations);
    //         }
    //     });
    //
    //     setData(copyData);
    // }

    const onDragEnd = (result: any) => {
        const { destination, source, draggableId } = result;

        console.log(result)

    }


    return (
        <>
            <div className={"max-h-[500px] overflow-y-scroll small-scrollbar w-fit pr-10 shadow border p-2"}>
                {isLoading ? <p>Loading...</p> :
                    <div className={"flex flex-col gap-y-2"}>
                            <DragDropContext onDragEnd={onDragEnd}>
                                    {data.map((location, index) => {
                                        return <TreeNode key={index} node={location} index={index} />
                                    })}
                            </DragDropContext>
                    </div>
            }
        </div>
    </>
  )
}

export default App
