// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLAttributes } from "react";

const Container = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    const style = twMerge(
        "bg-background border-muted border-t-accent text-foreground flex h-fit  w-full max-w-90 flex-col rounded-2xl border px-6 py-6 gap-7",
        className
    );

    return (
        <div
            className={style}
            {...props}
        />
    );
};

export default Container;
