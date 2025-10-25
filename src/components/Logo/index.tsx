// Libs
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

// Types
import type { ImgHTMLAttributes } from "react";

// Assets
import LogoLightImg from "./Assets/logo-texto-light.svg";
import LogoDarkImg from "./Assets/logo-texto-dark.svg";
import LogoBloodLightImg from "./Assets/logo-sangue-texto-light.svg";
import LogoBloodDarkImg from "./Assets/logo-sangue-texto-dark.svg";
import ThemeStore from "@/stores/ThemeStore";

const LogoStyles = tv({
    base: "h-full",
});

const Logo = ({ className, alt = "Logotipo do project webber.", ...props }: ImgHTMLAttributes<HTMLImageElement>) => {
    const theme = ThemeStore((state) => state.theme);
    const currentScheme = ThemeStore((state) => state.currentScheme);
    const src = {
        light: { "": LogoLightImg, blood: LogoBloodLightImg },
        dark: { "": LogoDarkImg, blood: LogoBloodDarkImg },
    };

    return <img src={src[theme][currentScheme]} alt={alt} className={twMerge(LogoStyles(), className)} {...props} />;
};

export default Logo;
