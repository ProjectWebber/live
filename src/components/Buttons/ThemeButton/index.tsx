// Libs
import { PiMoonFill } from "react-icons/pi";
import { PiSunFill } from "react-icons/pi";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Types
import type { HTMLMotionProps } from "motion/react";

// Stores
import ThemeStore from "@/stores/ThemeStore";

// Components
import BaseButton from "@/components/Buttons/BaseButton";

const ThemeButton = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
    ({ className, ...props }, ref) => {
        const theme = ThemeStore((s) => s.theme);
        const switchTheme = ThemeStore((s) => s.switchTheme);

        const Icon = () => (theme === "light" ? <PiMoonFill /> : <PiSunFill />);

        return (
            <BaseButton
                className={twMerge(
                    "text-foreground flex aspect-square h-full max-h-8 justify-center p-0",
                    className
                )}
                onClick={switchTheme}
                ref={ref}
                {...props}
            >
                <Icon />
            </BaseButton>
        );
    }
);

export default ThemeButton;
