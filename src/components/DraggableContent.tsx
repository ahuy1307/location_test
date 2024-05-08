import { Draggable } from 'react-beautiful-dnd';
import {ReactNode} from "react";

function DraggableContent({children, index, id}: {children: ReactNode, index: number, id:number}){
    
    return <div>
        <Draggable draggableId={id.toString()} index={index} key={id}>
            {(provided, snapshot) => (
                <div
                    style={{
                        ...provided.draggableProps.style,
                    }}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <div  style={{
                        backgroundColor: snapshot.isDragging ? 'gray' : '',
                    }}>
                        {children}
                    </div>
                </div>
            )}
        </Draggable>
    </div>
}

export default DraggableContent;