// Libs
import { twMerge } from "tailwind-merge";

// Types
import { useEffect, type HTMLAttributes } from "react";

const HeaderContainer = ({
    className,
    ...props
}: HTMLAttributes<HTMLElement>) => {
    useEffect(() => {
        const layoutElement = document.querySelector("#page-layout");
        const headerElement = document.querySelector("#header");
        const backgroundClass: string[] = [
            "bg-background/90",
            "backdrop-blur-xs",
        ];

        if (!layoutElement || !headerElement) return;

        layoutElement.addEventListener("scroll", () => {
            const currentScrollTop = layoutElement.scrollTop;
            const isDownInScroll = currentScrollTop > 30;
            const hasBackgroundArray = backgroundClass.map((value) => {
                if (headerElement.classList.contains(value)) return true;
                return false;
            });

            const hasBackground = hasBackgroundArray.find(
                (element) => element === true
            );

            if (isDownInScroll && !hasBackground) {
                headerElement.classList.add(...backgroundClass);
            } else if (!isDownInScroll && hasBackground) {
                headerElement.classList.remove(...backgroundClass);
            }
        });
    }, []);

    return (
        <header
            id="header"
            className={twMerge(
                "px-screen-responsive fixed top-0 z-20 flex h-16 w-full items-center justify-between py-1 pb-3 transition-colors",
                className
            )}
            {...props}
        />
    );
};

export default HeaderContainer;
