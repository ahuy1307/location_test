export interface Location {
    label: string,
    is_area: boolean,
    is_remote: boolean,
    height: number,
    real_parent_id: number | string
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