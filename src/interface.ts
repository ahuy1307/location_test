export interface Location {
    label: string,
    id: number,
    is_area: boolean,
    is_remote: boolean,
    locations: Location[]
}