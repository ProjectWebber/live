// Libs
import { motion } from "motion/react";

// Types
import type { savedCharacterProps } from "@/types/SavedCharacterProps";

// Stores
import ModalStore from "@/stores/ModalStore";

// Components
import BaseButton from "@/components/Buttons/BaseButton";
import CardDate from "./CardDate";
import CardImage from "./CardImage";
import CharacterDetailsModal from "@/components/Modals/CharacterDetailsModal";
import captalize from "@/utils/captalize";

interface GridItemProps {
    id: string;
    characterData: savedCharacterProps;
}

function GridItem({ id, characterData }: GridItemProps) {
    const addModal = ModalStore((state) => state.addModal);

    const handleButtonClick = () => {
        addModal(<CharacterDetailsModal characterId={id} characterData={characterData} />);
    };

    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="xs:max-w-full border-primary/50 hover:border-primary bg-background/80 hover:bg-background/100 flex h-fit! w-full! flex-col overflow-hidden rounded-2xl border transition-colors"
        >
            <div className="aspect-square w-full pb-4">
                <CardImage title={characterData.name} characterData={characterData} />
            </div>
            <div className="flex flex-1 flex-col justify-between gap-5 px-4 pb-6">
                <div className="flex flex-col">
                    <h3
                        className="font-specialelite text-foreground mb-2 line-clamp-2 h-12 max-h-[2.83rem] text-2xl leading-6 wrap-anywhere"
                        title={characterData.name}
                    >
                        {captalize(characterData.name)}
                    </h3>
                    <CardDate dateAndHour={characterData.saveDate} />
                </div>
                <BaseButton
                    size="sm"
                    variant="primary"
                    aria-label={`Botão de ver mais sobre o personagem ${characterData.name}`}
                    onClick={handleButtonClick}
                >
                    Ver Mais
                </BaseButton>
            </div>
        </motion.div>
    );
}

export default GridItem;
