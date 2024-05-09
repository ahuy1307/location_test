import React from "react";
import { NodeModel } from "@minoru/react-dnd-treeview";

type Props = {
    node: NodeModel;
    depth: number;
};

export const Placeholder: React.FC<Props> = (props) => {
    const left = props.depth * 24;
    return <div className={"bg-gray-500/50 h-[2px] my-1 right-0 translate-y-[-50%] top-0"} style={{ left }}></div>;
}
;
