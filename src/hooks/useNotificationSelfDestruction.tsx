// Libs
import { useEffect } from "react";

// Stores
import NotificationStore from "@/stores/NotificationStore";

const useNotificationDestruction = (componentKey: string) => {
    const removeNotification = NotificationStore(
        (state) => state.removeNotification
    );

    useEffect(() => {
        const timeOut = setTimeout(
            () => removeNotification(componentKey),
            3000
        );
        return () => clearTimeout(timeOut);
    }, [removeNotification, componentKey]);

    const handleClick = () => {
        removeNotification(componentKey);
    };

    return { handleClick };
};

export default useNotificationDestruction;
