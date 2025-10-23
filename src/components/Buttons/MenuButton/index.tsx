// Libs
import { PiListBold, PiXBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

// Types
import { forwardRef, useCallback } from "react";

// Stores
import MenuStore from "@/stores/MenuStore";

// Components
import BaseButton from "@/components/Buttons/BaseButton";
import { MainMenu } from "@/components/Layout/Menu/MainMenu";
import type { HTMLMotionProps } from "motion/react";

const MenuButton = forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
    ({ className, ...props }, ref) => {
        const { Menu, setMenu } = MenuStore();

        const Icon = useCallback(
            () => (Menu ? <PiXBold /> : <PiListBold />),
            [Menu]
        );

        return (
            <BaseButton
                title={"Menu Button"}
                className={twMerge("p-0 text-2xl", className)}
                variant="transparent"
                onClick={() => setMenu(<MainMenu />)}
                ref={ref}
                {...props}
            >
                <Icon />
            </BaseButton>
        );
    }
);

export default MenuButton;
