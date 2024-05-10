export interface Location {
    label: string,
    is_area: boolean,
    is_remote: boolean,
    space: boolean
}

export interface LocationResponse {
    id: number,
    label: string,
    is_area: boolean,
    is_remote: boolean,
    locations: LocationResponse[]
}

export interface TreeModel<T> {
    id: string | number;
    parent: string | number;
    text: string;
    droppable?: boolean,
    data?: T;
}