// Libs
import { useCallback } from "react";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import NotificationStore from "@/stores/NotificationStore";
import SavedCharactersStore from "@/stores/SavedCharactersStore";
import ModalStore from "@/stores/ModalStore";

// Hooks
import useCanvas from "../useCanvas";

// Utils
import getUniqueId from "@/utils/getUniqueId";
import getCurrentDate from "@/utils/getCurrentDate";

// Components
import BaseNotification from "@/components/BaseNotification";
import SaveModal from "@/components/Modals/SaveModal";

const useSaveCharacter = () => {
    const addNotification = NotificationStore((state) => state.addNotification);

    const addModal = ModalStore((state) => state.addModal);
    const removeModal = ModalStore((state) => state.removeModal);

    const selectedAssets = SelectionManagerStore((state) => state.selectedAssets);

    const saveCharacter = SavedCharactersStore((state) => state.saveCharacter);

    const { getLowQualityImageUrl } = useCanvas();

    const handleSave = useCallback(() => {
        const onSaveSubmit = (characterName?: string) => {
            const lowQualityImageUrl = getLowQualityImageUrl();

            if (!characterName || !lowQualityImageUrl) {
                return;
            }

            const characterData = {
                name: characterName,
                saveDate: getCurrentDate(),
                lowQualityImageUrl,
                selectedAssets,
            };

            saveCharacter(getUniqueId(), characterData);

            const key = getUniqueId();
            addNotification(
                <BaseNotification variant="success" componentKey={key} key={key}>
                    Personagem salvo com sucesso!
                </BaseNotification>
            );
            removeModal();
        };

        addModal(<SaveModal onSaveSubmit={onSaveSubmit} />);
    }, [addModal, addNotification, getLowQualityImageUrl, removeModal, saveCharacter, selectedAssets]);

    return { handleSave };
};

export default useSaveCharacter;
