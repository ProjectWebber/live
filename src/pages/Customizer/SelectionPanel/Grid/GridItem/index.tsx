// Libs
import { twMerge } from "tailwind-merge";
import { PiX } from "react-icons/pi";

// Types
import { memo, type HTMLAttributes } from "react";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";

// Styles
import { baseStyle, bgColorStyle, hoverStyle, checkedStyle } from "./styles";

// Components
import InputRadio from "@/components/Inputs/InputRadio";
import GridItemImage from "./GridItemImage";
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

interface GridItemProps extends HTMLAttributes<HTMLElement> {
    assetData: OrganizedFileData;
    bodyData: OrganizedFileData;
}

const GridItem = memo(({ id, assetData, bodyData, onChange }: GridItemProps) => {
    const selectedCategory = SelectionManagerStore((state) => state.selectedCategory);
    const isChecked = SelectionManagerStore((state) => state.selectedAssets[selectedCategory] === assetData.assetName);

    return (
        <div className={twMerge(baseStyle, bgColorStyle, isChecked && checkedStyle, !isChecked && hoverStyle)}>
            <InputRadio
                id={`selection-panel-asset-grid-${id}`}
                name="selection-panel-asset-grid"
                className="relative flex aspect-square! h-full w-fit items-center justify-center transition-all"
                checked={isChecked}
                onChange={onChange}
            >
                {assetData.assetName === "prop_vazio" ? (
                    <PiX size="2.1rem" className="text-foreground" />
                ) : (
                    <GridItemImage
                        assetSrc={assetData.url}
                        assetAlt={`Imagem do asset ${assetData.assetName}`}
                        bodySrc={bodyData.url}
                        bodyAlt={`Imagem do corpo selecionado na grid de assets ${bodyData.assetName}`}
                        category={selectedCategory}
                        corpo={assetData.bodyBelonging}
                    />
                )}
            </InputRadio>
        </div>
    );
});

export default GridItem;
