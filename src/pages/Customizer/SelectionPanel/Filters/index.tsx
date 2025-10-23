import useScrollFade from "@/hooks/useScrollFade";
import { useRef } from "react";
import { twMerge } from "tailwind-merge";
import FilterItem from "./FilterItem";
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import FilesStore from "@/stores/FilesStore";

const FiltersContainer = () => {
    const filtersContainerRef = useRef(null);
    const { fade } = useScrollFade(filtersContainerRef);

    const currentCategory = SelectionManagerStore(
        (state) => state.selectedCategory
    );
    const currentBody = SelectionManagerStore(
        (state) => state.selectedAssets.corpos
    );
    const filters = FilesStore((state) => {
        if (currentCategory === "corpos") return state.files?.bodyFilters;
        return state.files?.assetFilters[currentBody][currentCategory];
    });

    const handleFilterPlacement = () => {
        if (!filters)
            return (
                <span className="text-md text-foreground">
                    Carregando filtros...
                </span>
            );
        if (filters.length === 0) return <span>Categoria sem filtros.</span>;

        return filters.map((filter) => {
            return (
                <FilterItem
                    id={`filtro-${filter}`}
                    value={filter}
                    key={`filtro-${filter}`}
                >
                    {filter}
                </FilterItem>
            );
        });
    };

    return (
        <section
            ref={filtersContainerRef}
            className={twMerge(
                "mb-4 flex h-fit w-full gap-2 overflow-x-scroll overflow-y-hidden px-2 pb-1",
                fade
            )}
        >
            {handleFilterPlacement()}
        </section>
    );
};

export default FiltersContainer;
