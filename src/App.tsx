import  { useState } from "react";
import { DndProvider } from "react-dnd";
import {
    Tree,
    NodeModel,
    MultiBackend,
    getBackendOptions
} from "@minoru/react-dnd-treeview";
import SampleData from "./test.json";
import {CustomNode} from "./components/TreeNode.tsx";
import {Location} from "./interface.ts";
import {CustomDragPreview} from "./components/CustomDragPreview.tsx";
import {Placeholder} from "./components/Placeholder.tsx";

function App() {
    const [treeData, setTreeData] = useState<NodeModel<Location>[]>(SampleData);
    const handleDrop = (newTree: NodeModel<Location>[]) => setTreeData(newTree);

    return (
            <DndProvider backend={MultiBackend} options={getBackendOptions()}>
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
                        canDrop={(tree, { dragSource, dropTargetId }) => {
                            console.log(tree)
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
                            dropTarget: "bg-[#e8f0fe]",
                            placeholder: "relative",
                        }}

                        enableAnimateExpand={true}
                        onDrop={handleDrop}
                    />
                </div>
            </DndProvider>
    );
}

export default App;
