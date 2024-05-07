import { Draggable } from 'react-beautiful-dnd';
import {ReactNode} from "react";

function DraggableContent({children, index, id}: {children: ReactNode, index: number, id:number}){
    return <Draggable draggableId={id.toString()} index={index}>
        {(provided, snapshot) => (
            <div
                style={{
                    ...provided.draggableProps.style,
                    backgroundColor: snapshot.isDragging ? 'red' : 'white',
                }}
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
            >
                {children}
            </div>
        )}
    </Draggable>;
}

export default DraggableContent;