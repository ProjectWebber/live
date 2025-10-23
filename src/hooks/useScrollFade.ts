// Libs
import { useScroll, useMotionValueEvent } from "motion/react";
import { useState, useMemo, type RefObject } from "react";
import type { ClassNameValue } from "tailwind-merge";

function useScrollFade(containerRef: RefObject<HTMLElement | null>) {
    const [fade, setFade] = useState("content-fade-right");
    const memoizedFade = useMemo(() => fade, [fade]);

    const { scrollXProgress } = useScroll({
        container: containerRef,
    });

    useMotionValueEvent(scrollXProgress, "change", (current) => {
        if (containerRef.current !== null) {
            const isScrollable =
                containerRef.current.scrollWidth >
                containerRef.current.clientWidth;

            if (isScrollable) {
                if (current <= 0.10) setFade("content-fade-right");
                else if (current >= 0.90) setFade("content-fade-left");
                else setFade("content-fade-x");
            }
        }
    });

    return { fade: memoizedFade } as { fade: ClassNameValue };
}

export default useScrollFade;
