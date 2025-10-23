// Libs
import { FaTrashAlt } from "react-icons/fa";

// Stores
import NotificationStore from "@/stores/NotificationStore";
import SavedCharactersStore from "@/stores/SavedCharactersStore";
import ModalStore from "@/stores/ModalStore";

// Utils
import getUniqueId from "@/utils/getUniqueId";

// Compnents
import ConfirmationModal from "../ConfirmationModal";
import BaseNotification from "@/components/BaseNotification";
import { useNavigate } from "react-router";

const deleteSuccessNotification = (key: string) => (
    <BaseNotification variant="success" componentKey={key} key={key}>
        Personagem deletado com sucesso!
    </BaseNotification>
);

const editNotification = (key: string, characterName: string) => (
    <BaseNotification variant="default" componentKey={key} key={key}>
        Você está editando o personagem "{characterName}".
    </BaseNotification>
);

const removeButton = (
    <>
        <FaTrashAlt className="mb-0.5" />
        Excluir
    </>
);

const useCharacterDetailsModal = (
    characterName: string,
    characterId: string
) => {
    const addConfirmationModal = ModalStore(
        (state) => state.addConfirmationModal
    );
    const removeAllModal = ModalStore((state) => state.removeAllModal);
    const removeCharacter = SavedCharactersStore(
        (state) => state.removeCharacter
    );
    const addNotification = NotificationStore((state) => state.addNotification);

    const navigate = useNavigate();

    const handleDeleteAction = (id: string) => {
        const onDelete = () => {
            removeCharacter(id);
            addNotification(deleteSuccessNotification(getUniqueId()));
            removeAllModal();
        };

        addConfirmationModal(
            <ConfirmationModal
                customDescription={
                    "Deletar seu personagem é uma ação permanente..."
                }
                customErrorText={removeButton}
                onReset={onDelete}
            />
        );
    };

    const handleEditAction = () => {
        navigate(`./customizador/${characterId}`);
        addNotification(editNotification(getUniqueId(), characterName));
        removeAllModal();
    };

    return { handleDeleteAction, handleEditAction };
};

export default useCharacterDetailsModal;
