// Types
import type { HTMLMotionProps } from "motion/react";

interface BaseButtonProps extends HTMLMotionProps<"button"> {
    outlined?: boolean;
    variant?: "default" | "primary" | "success" | "warning" | "error" | "transparent";
    rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "fullRounded";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
}

export type { BaseButtonProps };
