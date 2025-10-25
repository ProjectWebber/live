import type { Categories } from "@/types/Categories";
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const organizeByCategory = (
    bodyOrganizedFiles: { [i: string]: OrganizedFileData[] },
    categories: Categories,
    emptyProp: OrganizedFileData
) => {
    const categoryOrganizedFiles: {
        [i: string]: { [i: string]: OrganizedFileData[] };
    } = {};
    const bodies = Object.keys(bodyOrganizedFiles);

    bodies.forEach((body) => {
        categoryOrganizedFiles[body] = {};

        categories.forEach((category) => {
            if (category !== "corpos") {
                const categoryImages: OrganizedFileData[] = bodyOrganizedFiles[
                    body
                ].filter((file) => file.category === category);

                categoryOrganizedFiles[body][category] = [
                    emptyProp,
                    ...categoryImages,
                ];
            }
        });
    });

    return categoryOrganizedFiles;
};

export default organizeByCategory;
