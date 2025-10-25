import type { savedCharacterProps } from "@/types/SavedCharacterProps";
import type { ReactNode } from "react";

interface CardImageProps {
    title: string;
    characterData: savedCharacterProps;
}

const CardImage = ({ title, characterData }: CardImageProps): ReactNode => {
    const src =
        characterData.lowQualityImageUrl !== undefined
            ? characterData.lowQualityImageUrl
            : "";

    if (src === "") return <></>;

    return (
        <div className="border-primary/35 border-b">
            <img
                src={src}
                alt={`Imagem do personagem ${title}`}
                title={`Imagem do personagem ${title}`}
                crossOrigin="anonymous"
                draggable={false}
                loading="lazy"
                decoding="async"
                className="text-foreground content-fade-bottom aspect-square w-full"
            />
        </div>
    );
};

export default CardImage;
