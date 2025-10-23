// Libs
import { forwardRef } from "react";

// Icons
import { PiXBold } from "react-icons/pi";

// Types
import type { HTMLAttributes } from "react";

const NoSuchGridItem = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    (_, ref) => {
        return (
            <span
                className="text-foreground flex flex-1 items-center justify-center gap-1"
                ref={ref}
            >
                <PiXBold /> Nenhum asset encontrado.
            </span>
        );
    }
);

export default NoSuchGridItem;
