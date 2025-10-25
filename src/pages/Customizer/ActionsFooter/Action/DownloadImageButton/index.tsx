// Stores
import NotificationStore from "@/stores/NotificationStore";

//Hooks
import useCanvas from "@/hooks/CustomizerPage/useCanvas";

// Utils
import getUniqueId from "@/utils/getUniqueId";

// Components
import BaseButton from "@/components/Buttons/BaseButton";
import BaseNotification from "@/components/BaseNotification";

const DownloadImageButton = () => {
    const addNotification = NotificationStore((state) => state.addNotification);
    const { drawAndDownload } = useCanvas();
    const handleClick = () => {
        drawAndDownload();

        const key = getUniqueId();
        addNotification(
            <BaseNotification variant="success" componentKey={key} key={key}>
                Imagem baixada com sucesso!
            </BaseNotification>
        );
    };

    return (
        <BaseButton variant="primary" onClick={handleClick} size="sm">
            Baixar Imagem
        </BaseButton>
    );
};

export default DownloadImageButton;
