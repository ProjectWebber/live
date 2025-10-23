// Libs
import type { Bodies } from "@/types/Bodies";
import type { Categories } from "@/types/Categories";
import { create } from "zustand";

interface FiltersStoreProps {
    filters?: { [Body in Bodies]: { [Category in Categories]: string[] } };

    checkedFilters: string[];

    setAllFilters(filters: { [Category in Categories]?: string[] }): void;

    addCheckedFilter(filter: string): void;
    removeCheckedFilter(filter: string): void;
    resetCheckedFilters(): void;
}

const FiltersStore = create<FiltersStoreProps>((set, get) => ({
    filters: undefined,

    checkedFilters: [],

    setAllFilters: (filters: { [Category in Categories]: string[] }) => {
        set(() => ({ filters: filters }));
    },

    addCheckedFilter: (filter: string) =>
        set((state) => ({ checkedFilters: [...state.checkedFilters, filter] })),

    removeCheckedFilter: (filter: string) => {
        const currentCheckedFilters: string[] = get().checkedFilters;
        const newCheckedFilters: string[] = currentCheckedFilters.filter(
            (item) => item !== filter
        );
        set(() => ({ checkedFilters: newCheckedFilters }));
    },
    resetCheckedFilters: () => set(() => ({ checkedFilters: [] })),
}));

export default FiltersStore;
