// Types
import type { Categories } from "@/types/Categories";

// Utils
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";
import { categories } from "@/utils/filesOrganizer/categories";

const getCategoryFilters = (
    dataOrganizedFiles: OrganizedFileData[]
): { [Category in Categories]?: string[] } => {
    const categoriesFilters: { [Category in Categories]?: string[] } = {};

    categories.forEach((category: Categories) => {
        const categoryFiles: OrganizedFileData[] = dataOrganizedFiles.filter(
            (file) => file.category === category
        );

        const categoryFilters: string[] = [];

        categoryFiles.forEach((file) => {
            if (file.filters !== undefined) {
                const categoryFilter: string[] = file.filters.filter(
                    (filter) => filter !== ""
                );
                categoryFilters.push(...categoryFilter);
            }
        });

        const unrepeatedFilters: Set<string> = new Set(categoryFilters);

        categoriesFilters[category] = [...unrepeatedFilters];
    });

    return categoriesFilters;
};

export default getCategoryFilters;
