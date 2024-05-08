import React from "react";
import { NodeModel, useDragOver } from "@minoru/react-dnd-treeview";
import {Location} from "../interface.ts";
import {FolderIcon, LocationIcon, UpIcon} from "../icon.tsx";
import {twMerge} from "tailwind-merge";

type Props = {
    node: NodeModel<Location>;
    depth: number;
    isOpen: boolean;
    onToggle: (id: NodeModel["id"]) => void;
};

export const CustomNode: React.FC<Props> = (props) => {
    const { id, droppable, data } = props.node;
    const indent = props.depth * 24;

    const handleToggle = (e: React.MouseEvent) => {
        e.stopPropagation();
        props.onToggle(props.node.id);
    };

    const dragOverProps = useDragOver(id, props.isOpen, props.onToggle);

    return (
        <div
            onClick={handleToggle}
            className={`flex items-center gap-x-2 mt-2 cursor-pointer`}
            style={{ paddingInlineStart: indent }}
            {...dragOverProps}
        >

            {data && data.is_area ? <FolderIcon/> : <LocationIcon />}

            {data && data.label}
            {droppable && <UpIcon className={twMerge(`transition-all duration-200`, !props.isOpen && `rotate-180`)} />}
        </div>
    );
};
