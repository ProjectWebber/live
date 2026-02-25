import type { HTMLAttributes } from "react";

interface NotificationProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "primary" | "success" | "warning" | "error";
    componentKey: string;
}

export type { NotificationProps };
