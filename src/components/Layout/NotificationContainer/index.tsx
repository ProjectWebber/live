// Libs
import { AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

// Stores
import NotificationStore from "@/stores/NotificationStore.jsx";

function NotificationContainer() {
    const notificationsList = NotificationStore((state) => state.notifications);

    const containerStyle = twMerge(
        "content-fade-bottom absolute right-0 z-4 flex max-h-48 w-68 flex-col gap-2 overflow-hidden pr-1 pl-2 md:max-h-60 md:w-76",
        notificationsList.length === 0 ? "h-fit" : "h-full"
    );

    return (
        <section className={containerStyle} id="notification-container">
            <AnimatePresence mode="sync">{notificationsList}</AnimatePresence>
        </section>
    );
}

export default NotificationContainer;
