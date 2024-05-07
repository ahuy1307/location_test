import { useState } from 'react';
import {Location} from "../interface.ts";
import {FolderIcon, LocationIcon, UpIcon} from "../icon.tsx";
import {twMerge} from "tailwind-merge";
import DroppableContent from "./DroppableContent.tsx";
import DraggableContent from "./DraggableContent.tsx";

const TreeNode = ({ node, index }: {node: Location, index: number}) => {
    const [expanded, setExpanded] = useState(false);
    const Area = node.is_area ? DroppableContent : DraggableContent;

    const handleToggle = () => {
        if (!node.is_area) return;
        setExpanded(!expanded);
    };

    return (
        <>
            <Area index={index} id={node.id}>
                <div onClick={() => handleToggle()} className={"flex items-center gap-x-2 cursor-pointer"}> {/* Điều chỉnh khoảng cách từ bên trái */}
                    {node.is_area ? <FolderIcon/> : <LocationIcon />}
                    {node.label}
                    {node.is_area && <UpIcon className={twMerge(`transition-all duration-200`, !expanded && `rotate-180`)} />}
                </div>
                {expanded && node.locations && (
                    <div className={"ml-8 mt-2 flex flex-col gap-y-2"}>
                        {node.locations.map((subNode, index) => (
                            <TreeNode key={index} node={subNode} index={index}  />
                        ))}
                    </div>
                )}
            </Area>
        </>
    );
};


export default TreeNode;
