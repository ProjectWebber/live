import type { AnchorHTMLAttributes } from "react";

interface BaseLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    to?: string;
    hasActiveState?: boolean;
    isExternal?: boolean;
    variant?: "default" | "primary";
    size?: "sm" | "md" | "lg" | "xl";
    underlined?: boolean;
    closeOnNavigate?: boolean;
}

export type { BaseLinkProps };
