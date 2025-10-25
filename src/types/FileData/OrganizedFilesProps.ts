// Types
import type { Bodies } from "../Bodies";
import type { Categories } from "../Categories";
import type { OrganizedFileData } from "./OrganizedFileData";

interface OrganizedFilesProps {
    bodies: OrganizedFileData[];
    emptyProp: OrganizedFileData;
    categories: Categories;
    onlyBodyOrganizedFiles: { [i: string]: OrganizedFileData[] };
    assets: {
        [Body in Bodies]: { [Category in Categories]: OrganizedFileData[] };
    };
    bodyFilters: string[];
    assetFilters: {
        [Body in Bodies]: { [Category in Categories]: string[] };
    };
}

export type { OrganizedFilesProps };
