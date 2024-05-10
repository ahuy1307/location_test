import React, {useState} from "react";
import { NodeModel, useDragOver } from "@minoru/react-dnd-treeview";
import {Location} from "../../interface.ts";
import {FolderIcon, LocationIcon, UpIcon} from "../../icon.tsx";
import {twMerge} from "tailwind-merge";

type Props = {
    node: NodeModel<Location>;
    depth: number;
    isOpen: boolean;
    onToggle: (id: NodeModel["id"]) => void;
};

export const CustomNode: React.FC<Props> = (props) => {
    const { id, droppable, data } = props.node;
    const indent = data && data.height * 24;
    const [isProcessing, setIsProcessing] = useState(false);

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();

        //prevent user click too fast
        if (isProcessing) {
            return;
        }

        setIsProcessing(true);

        if(props.node.data && !props.node.data.is_area)
            props.node.droppable = false;

        props.onToggle(props.node.id);
        setTimeout(() => {
            setIsProcessing(false);
        }, 200);
    };

    const dragOverProps = useDragOver(id, props.isOpen, () => {
        if(props.node.data && !props.node.data.is_area) {
            props.node.droppable = false;
        }

        props.onToggle(props.node.id);
    }); //auto expand on dragover

    return (
        <div style={{paddingInlineStart: indent}}>
            <div
                onClick={handleToggle}
                className={`flex items-center gap-x-2 mt-2 cursor-pointer no-select`}
                {...dragOverProps}
            >
               <div>
                   <div className={"flex items-center gap-x-2"}>
                       {data && data.is_area ? <FolderIcon/> : <LocationIcon/>}
                       {data && data.label}
                   </div>
                   {droppable && data && !data.is_area &&
                       <p className={"text-center hover:underline text-gray-500 text-sm mt-2"}>View more</p>}
               </div>
                {droppable && data && data.is_area &&
                    <UpIcon className={twMerge(`transition-all duration-200`, !props.isOpen && `rotate-180`)}/>}
                </div>
        </div>
    );
};
