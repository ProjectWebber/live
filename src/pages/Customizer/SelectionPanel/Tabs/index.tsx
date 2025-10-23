// Libs
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

// Hooks
import useScrollFade from "@/hooks/useScrollFade";

// Utils
import { categories } from "@/utils/filesOrganizer/categories";
import captalize from "@/utils/captalize";

// Components
import TabItem from "./TabItem";

const Tabs = () => {
    const tabListRef = useRef<HTMLElement | null>(null);
    const { fade } = useScrollFade(tabListRef);

    const TabsList = categories.map((category) => {
        return (
            <TabItem id={`tab-customizer-${category}`} key={`tab-customizer-${category}`} category={category}>
                {captalize(category)}
            </TabItem>
        );
    });

    return (
        <section
            ref={tabListRef}
            className={twMerge("mb-2 flex h-fit w-full gap-5 overflow-x-scroll overflow-y-hidden px-3 pb-1", fade)}
            key="categories-tabs-container"
        >
            {TabsList}
        </section>
    );
};

export default Tabs;
