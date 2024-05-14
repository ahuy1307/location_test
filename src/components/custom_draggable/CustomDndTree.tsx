import {HTML5Backend} from "react-dnd-html5-backend";
import {DropOptions, getBackendOptions, NodeModel, Tree} from "@minoru/react-dnd-treeview";
import {Location, LocationResponse} from "../../interface.ts";
import {CustomNode} from "./CustomNode.tsx";
import {CustomDragPreview} from "./CustomDragPreview.tsx";
import {Placeholder} from "./Placeholder.tsx";
import {DndProvider} from "react-dnd";
import {useEffect, useState} from "react";
import {getParentData, getTreeData} from "../../utils/getTreeData.ts";

function CustomDndTree({locationData, className}: {locationData: LocationResponse[], className?: string}) {
    const [treeData, setTreeData] = useState<NodeModel<Location>[]>([]);
    const [count, setCount] = useState(3);
    const tree = getTreeData(0, locationData, 0)

    const handleDrop = (newTree: NodeModel<Location>[], options:DropOptions<Location>) => {
        if(options.destinationIndex === undefined) {
            setTreeData([...newTree]);
            return;
        }
        const dragTreeIndex = newTree.findIndex(item => item.id === options.dragSource?.id);
        const dragTree = newTree[dragTreeIndex];
        if(!options.dropTarget?.data && dragTree.data) {
            dragTree.data.height = 0
            setTreeData([...newTree]);
            return;
        }

        const dropTreeIndex = newTree.findIndex(item => item.id === options.dropTarget?.id);

        if(dropTreeIndex != -1) {
            const dropTree = newTree[dropTreeIndex];
            if(dropTree.data && dragTree.data) {
                dragTree.data.height = dropTree.data.height + 1;
                if(dragTree.data.real_parent_id != dropTree.id) {
                    dragTree.data.real_parent_id = dropTree.id;
                }
                setTreeData([...newTree]);
                return;
            }
        }
        setTreeData([...newTree])
    }

    const setNewData = () => {
        console.log(count)
        const parentTree = getParentData(locationData.slice(count - 3, count))
        setTreeData(prev => {
           if(count  > 3)
               return [
                   ...prev,
                   ...parentTree,
               ]
            else
               return [
                   ...parentTree,
                     ...tree
               ]
        })
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
                    {depth, isOpen, onToggle, handleRef},
                ) => (
                        <CustomNode
                            handleRef={handleRef}
                            node={node}
                            depth={depth}
                            isOpen={isOpen}
                            onToggle={onToggle}
                        />
                )}
                sort={false}
                insertDroppableFirst={false}

                canDrop={(tree, {dragSource, dropTargetId}) => {
                    //if not show full tree, only allow drop on root
                    if(dragSource?.droppable && !dragSource?.data?.is_area)
                        return false

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
                setCount(prev => prev + 3)
            }} className={"mt-2 text-gray-500 hover:underline cursor-pointer"}>View more</p>}
    </div>
}

export default CustomDndTree;