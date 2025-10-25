import { tv } from "tailwind-variants";

const styles = tv({
    base: "flex items-center shrink-0 min-h-12 w-full p-2 px-4 gap-2 rounded-md border border-muted border-t-accent leading-5 text-foreground",
    variants: {
        variant: {
            default: "bg-background",
            primary: "bg-primary",
            success: "bg-success",
            warning: "bg-warning",
            error: "bg-error",
        },
    },
    defaultVariants: {
        variant: "default",
    },
});

export default styles;
