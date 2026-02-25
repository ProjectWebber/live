// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLAttributes } from "react";
import type { Categories } from "@/types/Categories";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";

interface TabItemProps extends HTMLAttributes<HTMLElement> {
    category: Categories;
}

const TabItem = ({ category, id, children }: TabItemProps) => {
    const isChecked = SelectionManagerStore((state) => state.selectedCategory === category);
    const setSelectedCategory = SelectionManagerStore((state) => state.setSelectedCategory);

    return (
        <div>
            <button
                id={id}
                className={twMerge(
                    "font-specialelite cursor-pointer text-xl transition-all",
                    isChecked && "text-foreground",
                    !isChecked && "text-foreground-muted opacity-70 hover:opacity-100"
                )}
                onClick={() => setSelectedCategory(category)}
            >
                {children}
            </button>
        </div>
    );
};

export default TabItem;
