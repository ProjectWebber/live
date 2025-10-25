// Libs
import { memo, useCallback } from "react";

// Types
import type { Categories } from "@/types/Categories";

// Utils
import { categories } from "@/utils/filesOrganizer/categories";

// Components
import PreviewItem from "./PreviewItem";

const Preview = memo(() => {
    const previewItens = useCallback(
        () =>
            categories.map((category: Categories) => {
                return <PreviewItem category={category} key={`preview-${category}`} />;
            }),
        []
    );

    return (
        <div
            className="content-fade-bottom relative aspect-square h-[40%] md:h-auto md:w-full md:max-w-140 2xl:max-w-170"
            id="preview-container"
            key={"preview-container"}
        >
            {previewItens()}
        </div>
    );
});

export default Preview;
