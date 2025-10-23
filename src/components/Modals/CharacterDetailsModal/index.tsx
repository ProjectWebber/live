// Libs
import { PiXBold } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";
import { MdSave, MdEditSquare  } from "react-icons/md";

// Types
import type { savedCharacterProps } from "@/types/SavedCharacterProps";

// Stores
import ModalStore from "@/stores/ModalStore";

// Components
import BaseButton from "@/components/Buttons/BaseButton";
import BaseModal from "../BaseModal";
import useCharacterDetailsModal from "./useCharacterDetailsModal";
import captalize from "@/utils/captalize";

interface CharacterDetailsModalProps {
    characterId: string;
    characterData: savedCharacterProps;
}

const CharacterDetailsModal = ({ characterId, characterData }: CharacterDetailsModalProps) => {
    const removeModal = ModalStore((state) => state.removeModal);
    const { handleDeleteAction, handleEditAction } = useCharacterDetailsModal(characterData.name, characterId);

    return (
        <section className={"flex flex-col gap-4"}>
            <BaseModal.Container className="border-primary/70 border-t-primary/100 from-bg-background to-bg-background-light flex flex-col gap-6 bg-linear-to-b pt-4 pb-7">
                <div className="border-b-primary/60 flex flex-col items-end border-b pb-3">
                    <img
                        src={characterData.lowQualityImageUrl}
                        alt=""
                        className="content-fade-bottom aspect-square w-full object-cover"
                        crossOrigin="anonymous"
                        draggable={false}
                        loading="lazy"
                        decoding="async"
                    />
                </div>
                <BaseModal.Content>
                    <h3 className="text-foreground mb-1 line-clamp-2 h-12 max-h-[2.83rem] text-2xl leading-6 wrap-anywhere">
                        {captalize(characterData.name)}
                    </h3>
                    <div className="text-foreground-muted flex items-center gap-0.5">
                        <MdSave className="mb-0.4" size={"1.2rem"} />
                        {characterData.saveDate}
                    </div>
                    {characterData.editDate && (
                        <div className="text-foreground-muted flex items-center gap-0.5">
                            <MdEditSquare  className="mb-0.4" size={"1.2rem"} />
                            {characterData.editDate}
                        </div>
                    )}
                </BaseModal.Content>
            </BaseModal.Container>
            <BaseModal.ActionsContainer className="h-fit justify-between">
                <BaseButton size="sm" variant="success" onClick={() => handleEditAction()}>
                    <RiPencilFill className="mb-0.5 text-lg" /> Editar
                </BaseButton>
                <BaseButton size="sm" variant="error" onClick={() => handleDeleteAction(characterId)}>
                    <FaTrashAlt className="mb-0.5" /> Excluir
                </BaseButton>
                <BaseButton size="sm" variant="default" onClick={() => removeModal()}>
                    <PiXBold className="mb-0.5 text-xl" /> Voltar
                </BaseButton>
            </BaseModal.ActionsContainer>
        </section>
    );
};

export default CharacterDetailsModal;
