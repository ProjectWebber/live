// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { ImgHTMLAttributes } from "react";

// Assets
import BgImageDefault from "./Assets/bg-image-green.avif";
import BgImageBlood from "./Assets/bg-image-blood.webp";
import ThemeStore from "@/stores/ThemeStore";

const BackgroundImage = ({
    className,
    alt = "Simbolo da calamidade.",
    ...props
}: ImgHTMLAttributes<HTMLImageElement>) => {
    const currentScheme = ThemeStore((state) => state.currentScheme);
    const theme = ThemeStore((state) => state.theme);
    const src: { [i: string]: string } = { "": BgImageDefault, blood: BgImageBlood };

    return (
        <img
            src={src[currentScheme]}
            alt={alt}
            className={twMerge(
                currentScheme === "" ? "opacity-20!" : "",
                theme === "light" ? "opacity-12" : "opacity-35",
                "animate-spin-slow fixed top-1/2 -z-0 aspect-square max-h-full max-w-125 -translate-y-1/2 scale-160 self-center blur-[3px] md:top-0 md:max-w-none md:translate-y-0 md:scale-100",
                className
            )}
            {...props}
        />
    );
};

export default BackgroundImage;
