// Libs
import { create } from "zustand";

// Types
import type { ReactElement } from "react";

interface NotificationStoreProps {
    notifications: ReactElement[];

    addNotification(notification: ReactElement): void;
    removeNotification(key: string): void;
}

const NotificationStore = create<NotificationStoreProps>((set) => ({
    notifications: [],

    addNotification: (notification: ReactElement) =>
        set((state) => ({
            notifications: [...state.notifications, notification],
        })),
    removeNotification: (key: string) =>
        set((state) => ({
            notifications: state.notifications.filter(
                (notification) => notification.key !== key
            ),
        })),
}));

export default NotificationStore;
