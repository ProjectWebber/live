import FiltersStore from "@/stores/FiltersStore";
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import { useEffect } from "react";

const useFilters = () => {
    const selectedCategory = SelectionManagerStore((state) => state.selectedCategory);
    const resetCheckedFilters = FiltersStore((state) => state.resetCheckedFilters);

    useEffect(() => resetCheckedFilters(), [selectedCategory]);
};

export default useFilters;
