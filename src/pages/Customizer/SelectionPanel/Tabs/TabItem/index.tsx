// Libs
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLAttributes } from "react";
import type { Categories } from "@/types/Categories";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";

// Components
import InputRadio from "@/components/Inputs/InputRadio";

interface TabItemProps extends HTMLAttributes<HTMLElement> {
    category: Categories;
}

const TabItem = ({ category, id, children }: TabItemProps) => {
    const isChecked = SelectionManagerStore(
        (state) => state.selectedCategory === category
    );
    const setSelectedCategory = SelectionManagerStore(
        (state) => state.setSelectedCategory
    );

    return (
        <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <InputRadio
                id={id}
                className={twMerge(
                    "font-specialelite cursor-pointer text-lg sm:text-xl transition-all",
                    isChecked && "text-foreground",
                    !isChecked &&
                        "text-foreground-muted opacity-70 hover:opacity-100"
                )}
                checked={isChecked}
                name="selection-panel-tabs"
                onChange={() => setSelectedCategory(category)}
            >
                {children}
            </InputRadio>
        </motion.div>
    );
};

export default TabItem;
