// Libs
import { tv } from "tailwind-variants";

const BaseLinkStyles = tv({
    base: "flex items-center w-fit font-medium transition-all ",
    variants: {
        variant: {
            default: "text-foreground",
            primary: "text-primary",
        },
        size: {
            sm: "text-sm gap-1 ",
            md: "gap-2",
            lg: "text-lg gap-2",
            xl: "text-xl gap-3",
        },
        underlined: {
            true: "underline underline-offset-5 decoration-current",
            false: "",
        },
        hasActiveState: {
            true: "",
            false: "",
        },
        isActive: {
            true: "cursor-default",
            false: " cursor-pointer",
        },
    },
    compoundVariants: [
        {
            variant: "default",
            isActive: false,
            hasActiveState: true,
            class: `text-foreground-muted decoration-transparent
			hover:brightness-115 hover:decoration-current`,
        },
        {
            variant: "primary",
            isActive: false,
            hasActiveState: true,
            class: `text-primary/50 decoration-transparent
			hover:text-primary/75 hover:decoration-current`,
        },
    ],
    defaultVariants: {
        variants: "default",
        size: "md",
        underlined: false,
        isActive: false,
    },
});

export { BaseLinkStyles };
