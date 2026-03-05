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
				return (
					<PreviewItem
						category={category}
						key={`preview-${category}`}
					/>
				);
			}),
		[],
	);

	return (
		<div
			className="content-fade-bottom relative aspect-square h-[44%] max-h-62 self-center md:h-auto md:max-h-full md:w-full md:max-w-120 2xl:max-w-140"
			style={{ background: "none" }}
			id="preview-container"
			key={"preview-container"}
		>
            {previewItens()}
		</div>
	);
});

export default Preview;
