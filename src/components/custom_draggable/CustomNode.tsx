import React, {RefObject, useEffect, useState} from "react";
import { NodeModel, useDragOver } from "@minoru/react-dnd-treeview";
import {Location} from "../../interface.ts";
import {FolderIcon, LocationIcon, UpIcon} from "../../icon.tsx";
import {twMerge} from "tailwind-merge";
import {CiLocationArrow1} from "react-icons/ci";
import {Tooltip} from "antd";

type Props = {
    node: NodeModel<Location>;
    depth: number;
    isOpen: boolean;
    onToggle: (id: NodeModel["id"]) => void;
    testIdPrefix?: string;
    handleRef: RefObject<any> | null;
};

export const CustomNode: React.FC<Props> = ({testIdPrefix= "", ...props}) => {
    const { id, droppable, data } = props.node;
    const indent = data && data.height * 16;
    const [isProcessing, setIsProcessing] = useState(false);

    useEffect(() => {
        if(props.node.data && props.node.data.real_parent_id != props.node.parent)
            props.node.parent = props.node.data.real_parent_id;
    }, []);

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
                className={twMerge(`flex items-center gap-x-2 mt-[6px] cursor-pointer no-select`, data && data.is_area && `mt-3`)}
                data-testid={`${testIdPrefix}custom-node-${id}`}
                {...dragOverProps}
            >
                <div>
                    <div className={twMerge(`flex items-center gap-x-2 group max-w-[300px]`,
                        props.node.data && !props.node.data.is_area && `hover:bg-gray-200 py-[5px] px-2 w-[300px]`)}>
                        {data && data.is_area ? <FolderIcon/> : <LocationIcon/>}
                        {data && <p className={twMerge(`flex-1 line-clamp-1`, !data.is_area && ``)}>{data.label}</p>}
                        <div
                            className={`cursor-grab drag-handle`}
                            ref={props.handleRef}
                            data-testid={`drag-handle-${props.node.id} `}
                        >
                            {data && !data.is_area &&
                                <Tooltip title="Move item">
                                    <CiLocationArrow1 className={"opacity-0 group-hover:opacity-100 w-5 h-5"}/>
                                </Tooltip>
                            }
                        </div>
                    </div>
                    {droppable && data && !data.is_area &&
                        <p className={"text-center hover:underline text-gray-500 text-sm mt-2"}>View more</p>}
                </div>
                {droppable && data && data.is_area &&
                    <UpIcon className={twMerge(`transition-all duration-300`, !props.isOpen && `rotate-180`)}/>}
            </div>
        </div>
    );
};
