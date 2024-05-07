import { Droppable } from 'react-beautiful-dnd';
import {ReactNode} from "react";

function DroppableContent({children, id} : {children: ReactNode, id:number}) {

    return <Droppable droppableId={id.toString()}>
        {(provided) => (
            <div
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
                {children}
                {provided.placeholder}
            </div>
        )}
    </Droppable>;
}

export default DroppableContent;