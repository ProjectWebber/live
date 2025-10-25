// Libs
import { create } from "zustand";

// Types
import type { CategoriesProps } from "@/types/CategoriesProps";
import type { Categories } from "@/types/Categories";
import type { Bodies } from "@/types/Bodies";

interface SelectionManagerStoreProps {
    selectedCategory: Categories;
    defaultAssets: CategoriesProps & { corpos: Bodies };
    selectedAssets: CategoriesProps & { corpos: Bodies };
    setSelectedCategory(newCategory: Categories): void;
    setCategoryAsset(newAsset: string | Bodies | undefined): void;
    replaceSelectedAssets(
        newObject: CategoriesProps & { corpos: Bodies }
    ): void;
    resetSelectedAssets(): void;
}

const SelectionManagerStore = create<SelectionManagerStoreProps>(
    (set, get) => ({
        selectedCategory: "corpos",

        defaultAssets: {
            corpos: "corpos_m_1",
            sobrancelhas: "prop_vazio",
            olhos: "prop_vazio",
            narizes: "prop_vazio",
            bocas: "prop_vazio",
            camisas: "prop_vazio",
            cabelos: "prop_vazio",
        },

        selectedAssets: {
            corpos: "corpos_m_1",
            sobrancelhas: "prop_vazio",
            olhos: "prop_vazio",
            narizes: "prop_vazio",
            bocas: "prop_vazio",
            camisas: "prop_vazio",
            cabelos: "prop_vazio",
        },

        setSelectedCategory: (newCategory: Categories) =>
            set({ selectedCategory: newCategory }),

        setCategoryAsset: (newAsset: Bodies | string | undefined) => {
            const defaultAssets = get().defaultAssets;
            const category = get().selectedCategory;

            if (!newAsset) return;

            switch (category) {
                case "corpos":

                    set((state) => {
                        const newSelectedAssets = {
                            ...state.defaultAssets,
                            corpos: newAsset,
                        };

                        localStorage.setItem(
                            "previousCharacter",
                            JSON.stringify(newSelectedAssets)
                        );

                        return {
                            selectedAssets: newSelectedAssets,
                        };
                    });
                    break;

                default:
                    set((state) => {
                        const newSelectedAssets = {
                            ...state.selectedAssets,
                            [category]: newAsset,
                        };
                        localStorage.setItem(
                            "previousCharacter",
                            JSON.stringify(newSelectedAssets)
                        );
                        return {
                            selectedAssets: newSelectedAssets,
                        };
                    });
                    break;
            }
        },

        replaceSelectedAssets: (
            newObject: CategoriesProps & { corpos: Bodies }
        ) => {
            localStorage.setItem(
                "previousCharacter",
                JSON.stringify(newObject)
            );
            set(
                ():
                    | SelectionManagerStoreProps
                    | Partial<SelectionManagerStoreProps> => ({
                    selectedAssets: newObject,
                })
            );
        },

        resetSelectedAssets: () => {
            const defaultAssets = get().defaultAssets;
            const currentBody = get().selectedAssets.corpos;

            const newSelectedAssets = {
                ...defaultAssets,
                corpos: currentBody,
            };

            set(() => ({
                selectedAssets: newSelectedAssets,
            }));

            localStorage.setItem(
                "previousCharacter",
                JSON.stringify(newSelectedAssets)
            );
        },
    })
);

export default SelectionManagerStore;
