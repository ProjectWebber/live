// Components
import BaseButton from "@/components/Buttons/BaseButton";
import useSaveCharacter from "@/hooks/CustomizerPage/ActionsFooter/useSaveCharacter";
import useSavedCharacterEdit from "@/hooks/CustomizerPage/useSavedCharacterEdit";

const SaveCharacterButton = () => {
    const { isEditing, handleSaveOverwrite } = useSavedCharacterEdit();
    const { handleSave } = useSaveCharacter();

    const handleClick = () => {
        if (isEditing) {
            handleSaveOverwrite();
            return;
        }
        handleSave();
        return;
    };

    return (
        <BaseButton variant="primary" onClick={handleClick} size="sm">
            Salvar Personagem
        </BaseButton>
    );
};

export default SaveCharacterButton;
