// Libs

// Types
import type { Categories } from "@/types/Categories";

// Stores
import FilesStore from "@/stores/FilesStore";
import SelectionManagerStore from "@/stores/SelectionManagerStore";
import type { ImgHTMLAttributes } from "react";

interface PreviewItemProps extends ImgHTMLAttributes<HTMLImageElement> {
    category: Categories;
}

const PreviewItem = ({ category, ...props }: PreviewItemProps) => {
    const assetName = SelectionManagerStore((state) => state.selectedAssets[category]);
    const bodyAssetName = SelectionManagerStore((state) => state.selectedAssets.corpos);

    const assetData = FilesStore((state) => {
        if (!state.files) return undefined;

        if (category === "corpos") return state.files.bodies.find((asset) => asset.assetName === assetName);

        return state.files.assets[bodyAssetName][category].find((asset) => asset.assetName === assetName);
    });

    return (
        <>
            {assetData && (
                <img
                    src={assetData.url}
                    alt={`Preview do asset ${assetData.assetName}`}
                    key={`preview-${assetData.assetName}-${assetData.id}`}
                    crossOrigin="anonymous"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    width={300}
                    height={300}
                    className="text-foreground absolute z-3 bg-transparent! w-full opacity-0 transition-all md:h-auto md:w-full md:max-w-none"
                    onLoad={(e) => {
                        e.currentTarget.classList.remove("opacity-0");
                    }}
                    {...props}
                />
            )}
        </>
    );
};

export default PreviewItem;
