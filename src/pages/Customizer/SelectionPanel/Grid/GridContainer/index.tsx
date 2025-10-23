// Types
import { useRef, type HTMLAttributes } from "react";

// Hooks
import useScrollFade from "@/hooks/useScrollFade";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import { twMerge } from "tailwind-merge";

const GridContainer = ({ children }: HTMLAttributes<HTMLDivElement>) => {
    const selectedCategory = SelectionManagerStore(
        (state) => state.selectedCategory
    );
    const ref = useRef(null);
    const { fade } = useScrollFade(ref);

    const style = twMerge(
        "flex h-full w-full flex-1 flex-col flex-wrap place-content-start overflow-x-scroll overflow-y-hidden px-2 gap-[3%] md:gap-1 pb-1 mb-2",
        fade
    );

    return (
        <section
            className={style}
            key={selectedCategory + "-gridData-Section"}
            ref={ref}
        >
            {children}
        </section>
    );
};

export default GridContainer;
