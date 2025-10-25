import type { HTMLMotionProps } from "motion/react";

interface NotificationProps extends HTMLMotionProps<"div"> {
    variant?: "default" | "primary" | "success" | "warning" | "error";
    componentKey: string;
}

export type { NotificationProps };
