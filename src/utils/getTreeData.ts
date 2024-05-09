import {Location, LocationResponse, TreeModel} from "../interface.ts";

export function getTreeData(id: number | string, data: LocationResponse[]): TreeModel<Location>[] {
    const arr:TreeModel<Location>[] = [];

    data.map((item) => {
        arr.push({
            id: item.id,
            parent: id,
            text: "",
            droppable: id == 0 || item.is_area,
            data: {
                label: item.label,
                is_area: item.is_area,
                is_remote: item.is_remote,
            }
        })

        if (item.locations.length > 0) {
            arr.push(...getTreeData(item.id, item.locations))
        }
    })

    return arr;
}