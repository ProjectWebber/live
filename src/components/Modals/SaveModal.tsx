import { type HTMLAttributes, useState } from "react";
import BaseButton from "../Buttons/BaseButton";
import BaseModal from "./BaseModal";
import ModalStore from "@/stores/ModalStore";

interface SaveModalProps extends HTMLAttributes<HTMLElement> {
    onSaveSubmit: (characterName?: string) => void;
}

const SaveModal = ({ onSaveSubmit }: SaveModalProps) => {
    const [name, setName] = useState<string>();
    const removeModal = ModalStore((state) => state.removeModal);

    return (
        <BaseModal.Container>
            <BaseModal.Content
                modalTitle={<>Qual o nome do seu personagem?</>}
                modalDescription={
                    <>
                        Ao salvar, o personagem estará disponivel em "Meus
                        Personagens".
                    </>
                }
            >
                <div className="mt-2">
                    <BaseModal.Input
                        labelText="Nome"
                        inputTips="Use pelo menos uma letra."
                        onChange={(e) => {
                            setName(e.target.value);
                        }}
                    />
                </div>
            </BaseModal.Content>
            <BaseModal.ActionsContainer>
                <BaseButton size="sm" variant="default" onClick={removeModal}>
                    Voltar
                </BaseButton>
                <BaseButton
                    size="sm"
                    variant="success"
                    onClick={() => onSaveSubmit(name)}
                >
                    Salvar
                </BaseButton>
            </BaseModal.ActionsContainer>
        </BaseModal.Container>
    );
};

export default SaveModal;
