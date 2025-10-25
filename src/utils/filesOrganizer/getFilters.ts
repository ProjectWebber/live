// Types
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const getFilters = (
    categoryOrganizedFiles: {
        [i: string]: { [i: string]: OrganizedFileData[] };
    },
    bodies: OrganizedFileData[]
) => {
    const bodyFilters = [
        ...new Set(
            bodies
                .flatMap((body) => body.filters || [])
        ),
    ];

    const assetFilters = Object.fromEntries(
        Object.entries(categoryOrganizedFiles).map(
            ([body, assetsByCategory]) => {
                const categoryFilters = Object.fromEntries(
                    Object.entries(assetsByCategory).map(
                        ([category, assets]) => {
                            const filters = [
                                ...new Set(
                                    assets
                                        .flatMap((asset) => asset.filters || [])
                                ),
                            ];
                            return [category, filters];
                        }
                    )
                );

                return [body, categoryFilters];
            }
        )
    );
    return { bodyFilters, assetFilters };
};

export default getFilters;
