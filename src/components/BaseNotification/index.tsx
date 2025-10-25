// Libs
import { motion } from "motion/react";
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
        <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{
                x: 0,
                opacity: 1,
                transition: { duration: 0.22, type: "spring" },
            }}
            exit={{ x: 50, opacity: 0, transition: { duration: 0.16 } }}
            className={twMerge(styles({ variant }), className)}
            onClick={handleClick}
            {...props}
        />
    );
};

export default BaseNotification;
