// Libs
import { FaArrowLeft } from "react-icons/fa6";
import { PiXBold } from "react-icons/pi";

// Types
import type { HTMLAttributes, ReactNode } from "react";

// Stores
import ModalStore from "@/stores/ModalStore";

// Components
import BaseButton from "../Buttons/BaseButton";
import BaseModal from "./BaseModal";

interface ConfirmationModalProps extends HTMLAttributes<HTMLElement> {
    customSuccessText?: ReactNode;
    customErrorText?: ReactNode;
    customDescription?: ReactNode;
    onReset: () => void;
}

const ConfirmationModal = ({
    customSuccessText,
    customErrorText,
    customDescription,
    onReset,
}: ConfirmationModalProps) => {
    const removeConfirmationModal = ModalStore(
        (state) => state.removeConfirmationModal
    );

    return (
        <BaseModal.Container>
            <BaseModal.Content
                modalTitle={<>Tem certeza?</>}
                modalDescription={
                    customDescription ? (
                        customDescription
                    ) : (
                        <>
                            Esta ação apagará permanentemente o progresso do seu
                            personagem. <br />
                            <br /> Deseja mesmo continuar?
                        </>
                    )
                }
            ></BaseModal.Content>
            <BaseModal.ActionsContainer>
                <BaseButton
                    size="sm"
                    variant="success"
                    onClick={removeConfirmationModal}
                >
                    {customSuccessText ? (
                        customSuccessText
                    ) : (
                        <>
                            <FaArrowLeft /> Manter
                        </>
                    )}
                </BaseButton>
                <BaseButton size="sm" variant="error" onClick={onReset}>
                    {customErrorText ? (
                        customErrorText
                    ) : (
                        <>
                            <PiXBold /> Resetar
                        </>
                    )}
                </BaseButton>
            </BaseModal.ActionsContainer>
        </BaseModal.Container>
    );
};

export default ConfirmationModal;
