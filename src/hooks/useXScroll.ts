import { useEffect, type RefObject } from "react";

const useXScroll = (containerRef: RefObject<HTMLElement | null>) => {
    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleWheel = (e: WheelEvent) => {
            if (e.deltaY === 0) return;
            if (e.shiftKey) return; // deixa o shift+scroll padrão
            e.preventDefault();
            container.scrollBy({
                left: e.deltaY,
                behavior: "smooth",
            });
        };

        container.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            container.removeEventListener("wheel", handleWheel);
        };
    }, [containerRef]);
};

export default useXScroll;
