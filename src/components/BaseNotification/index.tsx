// Libs
import { twMerge } from "tailwind-merge";

// Types
import type { NotificationProps } from "./types";

//Styles
import styles from "./style";

// Hooks
import useNotificationDestruction from "@/hooks/useNotificationSelfDestruction";

const BaseNotification = ({
    className,
    variant,
    componentKey,
    ...props
}: NotificationProps) => {
    const { handleClick } = useNotificationDestruction(componentKey);

    return (
        <div
            className={twMerge(styles({ variant }), className)}
            onClick={handleClick}
            {...props}
        />
    );
};

export default BaseNotification;
