// Libs
import { motion } from "motion/react";

// Types
import type { Categories } from "@/types/Categories";
import type { HTMLMotionProps } from "motion/react";

// Stores
import FilesStore from "@/stores/FilesStore";
import SelectionManagerStore from "@/stores/SelectionManagerStore";

interface PreviewItemProps extends HTMLMotionProps<"img"> {
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
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                    }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                    src={assetData.url}
                    alt={`Preview do asset ${assetData.assetName}`}
                    key={`preview-${assetData.assetName}-${assetData.id}`}
                    crossOrigin="anonymous"
                    draggable={false}
                    loading="lazy"
                    decoding="async"
                    className="text-foreground absolute z-3 h-full opacity-0 transition-all md:h-auto md:w-full"
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
