// Libs
import type { ReactElement } from "react";
import { create } from "zustand";

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
    addConfirmationModal: (confirmationModal) =>
        set(() => ({ confirmationModal })),
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
