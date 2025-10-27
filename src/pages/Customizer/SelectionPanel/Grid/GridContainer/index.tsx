// Types
import { useRef, type HTMLAttributes } from "react";

// Hooks
import useScrollFade from "@/hooks/useScrollFade";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import { twMerge } from "tailwind-merge";
import useXScroll from "@/hooks/useXScroll";

const GridContainer = ({ children }: HTMLAttributes<HTMLDivElement>) => {
    const selectedCategory = SelectionManagerStore((state) => state.selectedCategory);
    const gridContainerRef = useRef(null);
    useXScroll(gridContainerRef);
    const { fade } = useScrollFade(gridContainerRef);

    const style = twMerge(
        "flex max-h-full h-full w-full flex-1 shrink-0 flex-col flex-wrap place-content-start overflow-x-scroll overflow-y-hidden px-2 gap-1 md:gap-1 pb-1 mb-2",
        fade
    );

    return (
        <section className={style} key={selectedCategory + "-gridData-Section"} ref={gridContainerRef}>
            {children}
        </section>
    );
};

export default GridContainer;
