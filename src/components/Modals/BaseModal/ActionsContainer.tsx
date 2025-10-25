// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLAttributes } from "react";

const ActionsContainer = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={twMerge("flex gap-2", className)}
            {...props}
        />
    );
};

export default ActionsContainer;
