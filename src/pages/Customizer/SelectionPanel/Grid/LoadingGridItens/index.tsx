// Libs
import { forwardRef } from "react";

// Icons
import { AiOutlineLoading } from "react-icons/ai";

// Types
import type { HTMLAttributes } from "react";

const LoadingGridItens = forwardRef<HTMLElement, HTMLAttributes<HTMLElement>>(
    (_, ref) => {
        return (
            <span
                className="text-foreground flex flex-1 items-center justify-center gap-1"
                ref={ref}
            >
                <AiOutlineLoading className="animate-spin" /> Carregando...
            </span>
        );
    }
);

export default LoadingGridItens;
