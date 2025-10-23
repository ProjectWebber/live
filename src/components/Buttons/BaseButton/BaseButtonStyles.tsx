// Libs
import { tv } from "tailwind-variants";

const BaseButtonStyles = tv({
    base: `flex w-fit h-fit items-center text-nowrap font-medium cursor-pointer transition-all  drop-shadow text-foreground`,
    variants: {
        variant: {
            default: "bg-background-light hover:brightness-115 ",
            primary: "bg-primary    hover:brightness-115",
            success: "bg-success    hover:brightness-115",
            warning: "bg-warning    hover:brightness-115",
            error: "bg-error    hover:brightness-115",
            transparent: "bg-transparent",
        },
        outlined: {
            true: "border bg-transparent",
            false: "",
        },
        rounded: {
            sm: "rounded-sm",
            md: "rounded",
            lg: "rounded-lg",
            xl: "rounded-xl",
            "2xl": "rounded-2xl",
            "3xl": "rounded-3xl",
            "4xl": "rounded-4xl",
            fullRounded: "rounded-[999999px]",
        },
        size: {
            sm: "px-4 py-1     gap-0.5",
            md: "px-7    py-3    text-lg lg:text-xl    gap-2",
            lg: "px-10     py-4    text-xl    gap-3",
        },
        disabled: {
            true: "saturate-50 brightness-90",
            false: "",
        },
    },
    compoundVariants: [
        {
            outlined: true,
            variant: "default",
            class: `text-foreground border-foreground hover:border-background-light! hover:bg-background-light!`,
        },
        {
            outlined: true,
            variant: "primary",
            class: `text-primary hover:text-foreground border-primary hover:bg-primary`,
        },
        {
            outlined: true,
            variant: "success",
            class: `text-success hover:text-foreground border-success hover:bg-success`,
        },
        {
            outlined: true,
            variant: "warning",
            class: `text-warning hover:text-foreground border-warning hover:bg-warning`,
        },
        {
            outlined: true,
            variant: "error",
            class: `text-error hover:text-foreground border-error hover:bg-error`,
        },
    ],
    defaultVariants: {
        outlined: false,
        variant: "default",
        rounded: "fullRounded",
        size: "md",
        disabled: false,
    },
});

export { BaseButtonStyles };
