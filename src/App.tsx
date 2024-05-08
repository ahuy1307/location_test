import {useEffect, useState} from "react";
import { DndProvider } from "react-dnd";
import {
    Tree,
    NodeModel,
    getBackendOptions
} from "@minoru/react-dnd-treeview";
import {CustomNode} from "./components/CustomNode.tsx";
import {Location, LocationResponse, TreeModel} from "./interface.ts";
import {CustomDragPreview} from "./components/CustomDragPreview.tsx";
import {Placeholder} from "./components/Placeholder.tsx";
import { HTML5Backend } from 'react-dnd-html5-backend';
// import { TouchBackend } from 'react-dnd-touch-backend';

function App() {
    const [treeData, setTreeData] = useState<NodeModel<Location>[]>([]);
    // const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    // const Backend = isMobile ? TouchBackend : HTML5Backend;
    const [isLoading, setIsLoading] = useState(false)

    const handleDrop = (newTree: NodeModel<Location>[]) => {
        setTreeData(newTree);
    }

    useEffect(() => {
        if (treeData.length > 0) return;

        const fetchData = async () => {
            setIsLoading(true)
            try {
                const response = await fetch('https://mocki.io/v1/f1239b6d-8f43-45ab-be1a-d06c9bc6ab34')
                const data = await response.json()
                setTreeData([...getTreeData(0, data)])
                setIsLoading(false)
            } catch (e) {
                console.log(e)
                setIsLoading(false)
            }
        }

        fetchData()
    }, [treeData.length]);

    function getTreeData(id: number | string, data: LocationResponse[]): TreeModel<Location>[] {
        const arr:TreeModel<Location>[] = [];

        data.map((item) => {
                arr.push({
                    id: item.id,
                    parent: id,
                    text: "",
                    droppable: id == 0 || item.is_area,
                    data: {
                        label: item.label,
                        is_area: item.is_area,
                        is_remote: item.is_remote,
                    }
                })

            if (item.locations.length > 0) {
                arr.push(...getTreeData(item.id, item.locations))
            }
        })

        return arr;
    }

    return (
        <>
            {isLoading ? <div>Loading...</div>  :
                <DndProvider backend={HTML5Backend} options={{
                    getBackendOptions,
                    enableMouseEvents: true,
                    delayTouchStart: 1000,
                    enableKeyboardEvents: true,
                }}>
                    <div className={"max-h-[500px] ml-8 mt-8 overflow-y-scroll small-scrollbar w-fit pr-10 shadow border p-2"}>
                        <Tree
                            tree={treeData}
                            rootId={0}
                            render={(
                                node: NodeModel<Location>,
                                { depth, isOpen, onToggle }
                            ) => (
                                <CustomNode
                                    node={node}
                                    depth={depth}
                                    isOpen={isOpen}
                                    onToggle={onToggle}
                                />
                            )}
                            sort={false}
                            insertDroppableFirst={false}

                            canDrop={(_tree, { dragSource, dropTargetId }) => {
                                console.log(dragSource?.parent, dropTargetId)
                                if (dragSource?.parent === dropTargetId) {
                                        return true;
                                }
                            }}
                            dragPreviewRender={(monitorProps) => (
                                <CustomDragPreview monitorProps={monitorProps} />
                            )}
                            dropTargetOffset={10}
                            placeholderRender={(node, { depth }) => (
                                <Placeholder node={node} depth={depth} />
                            )}
                            classes={{
                                root: "h-full",
                                draggingSource: "opacity-30",
                                placeholder: "relative",
                            }}
                            enableAnimateExpand={true}
                            onDrop={handleDrop}
                        />
                    </div>
                </DndProvider>
            }
        </>
    );
}

export default App;
