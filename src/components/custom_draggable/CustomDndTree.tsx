import {HTML5Backend} from "react-dnd-html5-backend";
import {DropOptions, getBackendOptions, NodeModel, Tree} from "@minoru/react-dnd-treeview";
import {Location, LocationResponse} from "../../interface.ts";
import {CustomNode} from "./CustomNode.tsx";
import {CustomDragPreview} from "./CustomDragPreview.tsx";
import {Placeholder} from "./Placeholder.tsx";
import {DndProvider} from "react-dnd";
import {useEffect, useState} from "react";
import {getTreeData} from "../../utils/getTreeData.ts";

function CustomDndTree({locationData, className}: {locationData: LocationResponse[], className?: string}) {
    const [treeData, setTreeData] = useState<NodeModel<Location>[]>([]);
    const [count, setCount] = useState(3);

    const handleDrop = (newTree: NodeModel<Location>[], options: DropOptions<Location>) => {
        const { dragSource, destinationIndex} = options;

        if(!destinationIndex || !dragSource) return;

        const index = destinationIndex == newTree.length ? destinationIndex - 1 : destinationIndex + 1;
        const afterTree = newTree[index]
        const dragTree = newTree[destinationIndex]

        if (afterTree.data && dragSource.data) {
            if (dragTree.data) {
                if (afterTree.data.space == dragSource.data.space) {
                    setTreeData([...newTree]);
                    return;
                } else dragTree.data.space = !dragTree.data.space;
            }
        }

        setTreeData([...newTree]);
    }

    const setNewData = () => {
        const copyData = [...locationData];
        const newData = [...copyData.splice(0, count)];
        setTreeData([...getTreeData(0, newData)]);
    }

    useEffect(() => {
       setNewData()
    }, [count]);


    return <div className={className}>
        <DndProvider backend={HTML5Backend} options={{
            getBackendOptions,
            enableMouseEvents: true,
            delayTouchStart: 1000,
            enableKeyboardEvents: true,
        }}>

            <Tree
                tree={treeData}
                rootId={0}
                render={(
                    node: NodeModel<Location>,
                    {depth, isOpen, onToggle},
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

                canDrop={(_tree, {dragSource, dropTargetId}) => {
                    if (dragSource?.parent === dropTargetId) {
                        return true;
                    }
                }}
                dragPreviewRender={(monitorProps) => (
                    <CustomDragPreview monitorProps={monitorProps}/>
                )}
                dropTargetOffset={10}
                placeholderRender={(node, {depth}) => (
                    <Placeholder node={node} depth={depth}/>
                )}
                classes={{
                    root: "h-full",
                    draggingSource: "opacity-30",
                    placeholder: "relative",
                }}
                enableAnimateExpand={true}
                onDrop={(tree, options) => handleDrop(tree, options)}
            />
        </DndProvider>
        {count <= locationData.length &&
            <p onClick={() => {
                setCount(prev => prev * 2)
            }} className={"mt-2 text-gray-500 hover:underline cursor-pointer"}>View more</p>}
    </div>
}

export default CustomDndTree;