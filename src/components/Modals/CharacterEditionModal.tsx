// Store
import ModalStore from "@/stores/ModalStore";

// Components
import BaseModal from "@/components/Modals/BaseModal";
import BaseButton from "@/components/Buttons/BaseButton";

interface CharacterEditionModalProps {
    onSaveAsNew(): void;
    onOverwrite(): void;
}

const CharacterEditionModal = ({ onSaveAsNew, onOverwrite }: CharacterEditionModalProps) => {
    const removeModal = ModalStore((state) => state.removeModal);

    return (
        <BaseModal.Container>
            <BaseModal.Content
                modalTitle="Como deseja salvar o personagem?"
                modalDescription="Escolha se deseja criar um novo personagem, substituir o personagem atual ou cancelar as alterações."
            />
            <BaseModal.ActionsContainer>
                <BaseButton size="sm" variant="default" onClick={() => removeModal()}>
                    Voltar
                </BaseButton>
                <BaseButton size="sm" variant="success" onClick={onSaveAsNew}>
                    Salvar novo
                </BaseButton>
                <BaseButton size="sm" variant="error" onClick={onOverwrite}>
                    Substituir
                </BaseButton>
            </BaseModal.ActionsContainer>
        </BaseModal.Container>
    );
};

export default CharacterEditionModal;
