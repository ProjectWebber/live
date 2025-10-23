// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { ReactNode, HTMLAttributes, FC } from "react";

const NoSuchCharacter: FC = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>): ReactNode => {
    return (
        <div
            className={twMerge(
                "flex h-full w-full items-center justify-center",
                className
            )}
            {...props}
        >
            <span className="text-foreground text-2xl">
                Sem personagens salvos.
            </span>
        </div>
    );
};

export default NoSuchCharacter;
