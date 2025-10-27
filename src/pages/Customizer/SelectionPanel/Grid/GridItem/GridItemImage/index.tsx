//Libs
import { useRef } from "react";
import { twMerge } from "tailwind-merge";

// Types
import type { Categories } from "@/types/Categories";
import type { ImgHTMLAttributes, ReactEventHandler } from "react";
import type { Bodies } from "@/types/Bodies";

// Style
import GridItemImageStyles from "./style";

interface GridItemImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    corpo: Bodies;
    category: Categories;
    assetSrc: string;
    assetAlt: string;
    bodySrc: string;
    bodyAlt: string;
}

const GridItemImage = ({
    className,
    corpo,
    category,
    assetSrc,
    assetAlt,
    bodySrc,
    bodyAlt,
}: GridItemImageProps) => {
    const assetRef = useRef<HTMLImageElement>(null);
    const bodyRef = useRef<HTMLImageElement>(null);

    const handleLoad: ReactEventHandler<HTMLImageElement> = (e) =>
        e.currentTarget.complete &&
        e.currentTarget.classList.remove("opacity-0");

    return (
        <>
            <img
                className={twMerge(
                    GridItemImageStyles({ corpo, category }),
                    className
                )}
                src={assetSrc}
                alt={assetAlt}
                ref={bodyRef}
                crossOrigin="anonymous"
                draggable={false}
                loading="lazy"
                decoding="async"
                onLoad={handleLoad}
            />
            {category !== "corpos" && (
                <img
                    className={twMerge(
                        GridItemImageStyles({ corpo, category }),
                        className,
                        "z-1 shrink-0"
                    )}
                    src={bodySrc}
                    alt={bodyAlt}
                    ref={assetRef}
                    crossOrigin="anonymous"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    onLoad={handleLoad}
                />
            )}
        </>
    );
};

export default GridItemImage;
