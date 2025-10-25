// Libs
import { useCallback, useMemo } from "react";
import { useParams } from "react-router";

// Stores
import ModalStore from "@/stores/ModalStore";

// Hooks
import useCanvas from "./useCanvas";

// Utils
import getCurrentDate from "@/utils/getCurrentDate";

// Components
import CharacterEditionModal from "@/components/Modals/CharacterEditionModal";
import SavedCharactersStore from "@/stores/SavedCharactersStore";
import getUniqueId from "@/utils/getUniqueId";
import BaseNotification from "@/components/BaseNotification";
import NotificationStore from "@/stores/NotificationStore";
import useSaveCharacter from "./ActionsFooter/useSaveCharacter";
import SelectionManagerStore from "@/stores/SelectionManagerStore";

const useSavedCharacterEdit = () => {
    const { getLowQualityImageUrl } = useCanvas();
    const { characterID } = useParams();

    const addModal = ModalStore((state) => state.addModal);
    const removeModal = ModalStore((state) => state.removeModal);
    const replaceCharacter = SavedCharactersStore((state) => state.replaceCharacter);
    const addNotification = NotificationStore((state) => state.addNotification);
    const selectedAssets = SelectionManagerStore((state) => state.selectedAssets);
    const savedCharacters = SavedCharactersStore((state) => state.savedCharacters);

    const { handleSave } = useSaveCharacter();

    const isEditing = useMemo(() => {
        if (characterID && characterID.length === 15) return true;
        return false;
    }, [characterID]);

    const findSavedCharacterData = useCallback(
        (id: string) => {
            const savedCharacterData = Object.entries(savedCharacters).find(([savedId]) => savedId === id);

            if (!savedCharacterData) return;

            return savedCharacterData;
        },
        [savedCharacters]
    );

    const handleSaveOverwrite = () => {
        if (isEditing) {
            console.log("Overwrite");
            const id = characterID;
            if (!id) return;

            const oldSavedCharacterData = findSavedCharacterData(id);

            if (!oldSavedCharacterData) return;

            const onOverwrite = () => {
                const lowQualityImageUrl = getLowQualityImageUrl();

                if (!lowQualityImageUrl) {
                    return;
                }

                const characterData = {
                    name: oldSavedCharacterData[1].name,
                    saveDate: oldSavedCharacterData[1].saveDate,
                    editDate: getCurrentDate(),
                    lowQualityImageUrl,
                    selectedAssets,
                };

                replaceCharacter(id, characterData);

                const key = getUniqueId();
                addNotification(
                    <BaseNotification variant="success" componentKey={key} key={key}>
                        Personagem salvo foi substituido com sucesso!
                    </BaseNotification>
                );
                removeModal();
            };

            addModal(<CharacterEditionModal onOverwrite={onOverwrite} onSaveAsNew={handleSave} />);
        }
    };

    return { isEditing, handleSaveOverwrite };
};

export default useSavedCharacterEdit;
