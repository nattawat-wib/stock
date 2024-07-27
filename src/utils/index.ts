import { FilterObject } from "@/interface";

export const generateObjectToQueryString = (filter: FilterObject): string => {
    let queryString: string = "";

    if (filter) {
        Object.keys(filter)?.map((key: any) => {
            if (!filter[key]) return;
            queryString += `&${key}=${filter[key]}`;
        });

        queryString = "?" + queryString.replace("&", "");
    }

    return queryString;
};