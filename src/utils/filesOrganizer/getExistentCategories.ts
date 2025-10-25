import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const getExistentCategories = (dataOrganizedFiles: OrganizedFileData[]) => {
    const unrepeatedCategories: Set<string> = new Set();

    dataOrganizedFiles.forEach((file) => {
        const category: string = file.category;

        if (category !== undefined) unrepeatedCategories.add(category);
    });

    return unrepeatedCategories;
};

export default getExistentCategories;
