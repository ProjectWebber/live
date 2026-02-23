// Libs
import type { ReactElement } from "react";
import { create } from "zustand";
import BaseModal from "@/components/Modals/BaseModal";

const modalAvisoForaDoAr = (
    <BaseModal.Container>
        <BaseModal.Content
            modalTitle="Aviso!"
            modalDescription={
                <div className="flex flex-col">
                    <p>
                        Estamos temporariamente fora do ar 🚧
                        <br />
                        <br />
                        Nosso site está passando por uma instabilidade devido ao alto volume de acessos. Mas não se
                        preocupe, nossa equipe já está trabalhando para normalizar tudo o mais rápido possível.
                        <br />
                        <br />
                        Agradecemos imensamente o apoio e a compreensão de todos! 💙
                    </p>
                </div>
            }
        />
    </BaseModal.Container>
);

interface ModalStoreProps {
    modal: ReactElement | null;
    confirmationModal: ReactElement | null;
    addModal(modal: ReactElement): void;
    addConfirmationModal(confirmationModal: ReactElement): void;
    removeModal(): void;
    removeConfirmationModal(): void;
    removeAllModal(): void;
}

const ModalStore = create<ModalStoreProps>((set) => ({
    modal: null,
    confirmationModal: null,

    addModal: (modal) => set(() => ({ modal })),
    addConfirmationModal: (confirmationModal) => set(() => ({ confirmationModal })),
    removeModal: () =>
        set({
            modal: null,
        }),
    removeConfirmationModal: () =>
        set({
            confirmationModal: null,
        }),
    removeAllModal: () =>
        set({
            modal: null,
            confirmationModal: null,
        }),
}));

export default ModalStore;
