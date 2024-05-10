import {Location, LocationResponse, TreeModel} from "../interface.ts";

const LIMIT_CHILD = 5;

export function getTreeData(id: number | string, data: LocationResponse[], height: number): TreeModel<Location>[] {
    const arr:TreeModel<Location>[] = [];
    let parentId : number | string;

    data.map((item, index) => {

        arr.push({
            id: item.id,
            parent: parentId || id,
            text: "",
            droppable: id == 0 || item.is_area || (index + 1) % LIMIT_CHILD === 0,
            data: {
                label: item.label,
                is_area: item.is_area,
                is_remote: item.is_remote,
                height: height,
                real_parent_id: id
            }
        })

        if((index + 1) % LIMIT_CHILD == 0 && id !=  0)
            parentId = item.id;

        if (item.locations.length > 0) {
            arr.push(...getTreeData(item.id, item.locations, height + 1))
        }
    })

    return arr;
}