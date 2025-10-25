// Libs
import { useMediaQuery } from "react-responsive";
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLAttributes } from "react";

// Components
import DesktopNav from "../DesktopNavLayout";
import MobileNav from "../MobileNavLayout";

const NavContainer = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
    const isMobile: boolean = useMediaQuery({ maxWidth: 870 });

    return (
        <nav
            className={twMerge(
                "flex h-fit w-fit justify-center gap-4",
                className
            )}
            {...props}
        >
            {isMobile ? <MobileNav /> : <DesktopNav />}
        </nav>
    );
};

export default NavContainer;
