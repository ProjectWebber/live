// Libs
import { twMerge } from "tailwind-merge";
import { useRef } from "react";

// Hooks
import useScrollFade from "@/hooks/useScrollFade";

// Utils
import { categoryTabs } from "@/utils/filesOrganizer/categories";
import captalize from "@/utils/captalize";

// Components
import TabItem from "./TabItem";
import useXScroll from "@/hooks/useXScroll";

const Tabs = () => {
    const tabListRef = useRef<HTMLElement | null>(null);
    useXScroll(tabListRef);
    const { fade } = useScrollFade(tabListRef);

    const TabsList = categoryTabs.map((category) => {
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
