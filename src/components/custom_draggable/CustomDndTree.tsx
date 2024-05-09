import {HTML5Backend} from "react-dnd-html5-backend";
import {getBackendOptions, NodeModel, Tree} from "@minoru/react-dnd-treeview";
import {Location, LocationResponse} from "../../interface.ts";
import {CustomNode} from "./CustomNode.tsx";
import {CustomDragPreview} from "./CustomDragPreview.tsx";
import {Placeholder} from "./Placeholder.tsx";
import {DndProvider} from "react-dnd";
import {useState} from "react";
import {getTreeData} from "../../utils/getTreeData.ts";

function CustomDndTree({locationData, className}: {locationData: LocationResponse[], className?: string}) {
    const [treeData, setTreeData] = useState<NodeModel<Location>[]>([...getTreeData(0, locationData)]);

    const handleDrop = (newTree: NodeModel<Location>[]) => {
        setTreeData(newTree);
    }

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
                    {depth, isOpen, onToggle}
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
                onDrop={handleDrop}
            />
        </DndProvider>
    </div>
}

export default CustomDndTree;