// Libs
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router";

// Types
import type { BaseLinkProps } from "./BaseLinkTypes";

// Styles
import { BaseLinkStyles } from "./BaseLinkStyles";
import MenuStore from "@/stores/MenuStore";

const BaseLink = ({
    isExternal,
    hasActiveState = false,
    closeOnNavigate = false,
    to,
    role = "link",
    target = "_blank",
    variant = "default",
    size,
    underlined,
    className,
    ...props
}: BaseLinkProps) => {
    const closeMenu = MenuStore((state) => state.closeMenu);

    const handleClick = () => {
        if (closeOnNavigate) closeMenu();
    };

    return isExternal ? (
        <a
            className={twMerge(
                BaseLinkStyles({
                    hasActiveState,
                    variant,
                    size,
                    underlined,
                }),
                className
            )}
            target={target}
            role={role}
            onClick={handleClick}
            draggable={false}
            {...props}
        />
    ) : (
        <NavLink
            to={to ? to : "/"}
            target="_self"
            role={role}
            className={({ isActive }: { isActive: boolean }) => {
                return twMerge(
                    BaseLinkStyles({
                        isActive,
                        hasActiveState,
                        variant,
                        size,
                        underlined,
                    }),
                    className
                );
            }}
            onClick={handleClick}
            draggable={false}
            {...props}
        />
    );
};

export default BaseLink;
