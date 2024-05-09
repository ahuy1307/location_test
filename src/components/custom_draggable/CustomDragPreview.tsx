import React from "react";
import { DragLayerMonitorProps } from "@minoru/react-dnd-treeview";
import {Location} from "../../interface.ts";
import {FolderIcon, LocationIcon} from "../../icon.tsx";

type Props = {
    monitorProps: DragLayerMonitorProps<Location>;
};

export const CustomDragPreview: React.FC<Props> = (props) => {
    const item = props.monitorProps.item;

    return (
        <div className={"drag-preview"}>
            <div>
                {item.data && (
                    item.data.is_area ? <FolderIcon className={"fill-white"}/> : <LocationIcon className={"fill-white"} />
                )}
            </div>
            <div>{props.monitorProps.item.data?.label}</div>
        </div>
    );
};
