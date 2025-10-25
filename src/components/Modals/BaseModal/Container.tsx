// Libs
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLMotionProps } from "motion/react";

const Container = ({ className, ...props }: HTMLMotionProps<"div">) => {
    const style = twMerge(
        "bg-background border-muted border-t-accent text-foreground flex h-fit  w-full max-w-90 flex-col rounded-2xl border px-6 py-6 gap-7",
        className
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={style}
            {...props}
        />
    );
};

export default Container;
