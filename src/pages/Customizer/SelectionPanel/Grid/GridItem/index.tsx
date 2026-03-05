// Libs
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { PiX } from "react-icons/pi";

// Types
import { memo, type ButtonHTMLAttributes } from "react";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";

// Styles
import { baseStyle, bgColorStyle, hoverStyle, checkedStyle } from "./styles";

// Components
import GridItemImage from "./GridItemImage";
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

interface GridItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	assetData: OrganizedFileData;
	bodyData: OrganizedFileData;
}

const GridItem = memo(({ id, assetData, bodyData, onClick }: GridItemProps) => {
	const selectedCategory = SelectionManagerStore(
		(state) => state.selectedCategory,
	);
	const isChecked = SelectionManagerStore(
		(state) =>
			state.selectedAssets[selectedCategory] === assetData.assetName,
	);

	return (
		<motion.div
			className="aspect-square! max-h-27 md:max-h-37 h-[46%] md:h-[49%] w-auto"
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.15 }}
		>
			<button
				id={`selection-panel-asset-grid-${id}`}
				className={twMerge(
					baseStyle,
					bgColorStyle,
					isChecked && checkedStyle,
					!isChecked && hoverStyle,
				)}
				onClick={onClick}
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
			</button>
		</motion.div>
	);
});

export default GridItem;
