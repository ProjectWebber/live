// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLAttributes } from "react";

const List = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
    <section
        className={twMerge(
            "grid-card-container h-full! w-full! flex-1",
            className
        )}
        {...props}
    />
);

export default List;
