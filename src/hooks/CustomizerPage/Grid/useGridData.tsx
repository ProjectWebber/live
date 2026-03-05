// Libs
import { useMemo } from "react";

// Types
import type { Bodies } from "@/types/Bodies";

// Hooks
import useCharacterReset from "@/hooks/CustomizerPage/ActionsFooter/useCharacterReset";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import FilesStore from "@/stores/FilesStore";

// Components
import GridItem from "@/pages/Customizer/SelectionPanel/Grid/GridItem";
import NoSuchGridItem from "@/pages/Customizer/SelectionPanel/Grid/NoSuchGridItem";
import LoadingGridItens from "@/pages/Customizer/SelectionPanel/Grid/LoadingGridItens";
import GridContainer from "@/pages/Customizer/SelectionPanel/Grid/GridContainer";
import FiltersStore from "@/stores/FiltersStore";

const useGridData = () => {
	// Store data
	const isLoadingFiles = FilesStore((state) => state.isLoading);
	const selectedCategory = SelectionManagerStore(
		(state) => state.selectedCategory,
	);
	const selectedAssets = SelectionManagerStore(
		(state) => state.selectedAssets,
	);
	const selectedBodyAssetName: Bodies = SelectionManagerStore(
		(state) => state.selectedAssets["corpos"],
	);
	const selectedBodyAsset = FilesStore((state) => {
		if (!state.files) return null;

		const bodyAsset = state.files.bodies.find(
			(data) => data.assetName === selectedBodyAssetName,
		);

		if (!bodyAsset) return null;
		return bodyAsset;
	});
	const selectedCategoryAssets = FilesStore((state) => {
		if (state.files === null) return null;

		if (selectedCategory === "corpos") return state.files.bodies;

		return state.files.assets[selectedBodyAssetName][selectedCategory];
	});
	const setCategoryAsset = SelectionManagerStore(
		(state) => state.setCategoryAsset,
	);
	const checkedFilters = FiltersStore((state) => state.checkedFilters);

	const { onReset } = useCharacterReset();

	const GridContent = useMemo(() => {
		if (isLoadingFiles || !selectedBodyAsset || !selectedCategoryAssets)
			return <LoadingGridItens />;

		if (!isLoadingFiles && selectedCategoryAssets.length === 0)
			return <NoSuchGridItem />;

		const filteredAssets = selectedCategoryAssets
			.map((asset) => {
				if (asset.assetName === "prop_vazio") return asset;
				if (checkedFilters.length === 0) return asset;

				const containAllCheckedFilters = checkedFilters.every(
					(filter) => asset.filters?.includes(filter),
				);
				if (containAllCheckedFilters) return asset;
			})
			.filter((asset) => asset !== undefined);

		const listOfGridItens = filteredAssets.map((assetData) => {
			const handleClick = () => {
				const categoryAssets: Record<string, string> = { ...selectedAssets };
				categoryAssets.corpos = "prop_vazio";
                const hasSelection = Object.values(categoryAssets).some(
                    (asset) => asset !== "prop_vazio"
                );

				if (selectedCategory !== "corpos" || !hasSelection) {
					setCategoryAsset(assetData.assetName);
					return;
				}

				onReset(
					() => setCategoryAsset(assetData.assetName),
					"Trocar o corpo do personagem vai resetar todos os assets selecionados.",
				);
			};

			return (
				<GridItem
					id={assetData.id + "-grid-item"}
					assetData={assetData}
					bodyData={selectedBodyAsset}
					key={assetData.assetName + "-grid-item"}
					onClick={handleClick}
				/>
			);
		});

		return (
			<GridContainer key={selectedCategory + "-gridData-Section"}>
				{listOfGridItens}
			</GridContainer>
		);
	}, [
		onReset,
		setCategoryAsset,
		isLoadingFiles,
		selectedCategory,
		selectedBodyAsset,
		selectedCategoryAssets,
		checkedFilters,
	]);

	return { GridContent };
};

export default useGridData;
