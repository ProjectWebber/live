// Stores
import ModalStore from "@/stores/ModalStore";
import NotificationStore from "@/stores/NotificationStore";

// Utils
import getUniqueId from "@/utils/getUniqueId";

// Components
import BaseNotification from "@/components/BaseNotification";
import ConfirmationModal from "@/components/Modals/ConfirmationModal";

const useCharacterReset = () => {
    const addConfirmationModal = ModalStore((state) => state.addConfirmationModal);
    const removeConfirmationModal = ModalStore((state) => state.removeConfirmationModal);

    const addNotification = NotificationStore((state) => state.addNotification);

    const onReset = (resetFunction: () => void, customDescription?: string) => {
        addConfirmationModal(
            <ConfirmationModal
                customDescription={customDescription}
                onReset={() => {
                    resetFunction();
                    removeConfirmationModal();

                    const key = getUniqueId();
                    addNotification(
                        <BaseNotification variant="success" componentKey={key} key={key}>
                            Personagem redefinido com sucesso!
                        </BaseNotification>
                    );
                }}
            />
        );
    };

    return { onReset };
};

export default useCharacterReset;
