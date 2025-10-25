// Libs
import { motion } from "motion/react";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Types
import type { BaseButtonProps } from "./BaseButtonTypes";

// Styles
import { BaseButtonStyles } from "./BaseButtonStyles";

const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
    ({ outlined, variant, rounded, size, disabled, className, ...props }, ref) => {
        return (
            <motion.button
                ref={ref}
                className={twMerge(BaseButtonStyles({ outlined, variant, rounded, size, disabled }), className)}
                {...props}
            />
        );
    }
);

BaseButton.displayName = "Button";

export default BaseButton;
