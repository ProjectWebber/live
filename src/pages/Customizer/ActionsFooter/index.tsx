// Libs
import { memo, useRef } from "react";
import { twMerge } from "tailwind-merge";

// Hooks
import useScrollFade from "@/hooks/useScrollFade";

// Components
import ResetCharacterButton from "./Action/ResetCharacterButton";
import DownloadImageButton from "./Action/DownloadImageButton";
import SaveCharacterButton from "./Action/SaveCharacterButton";

const ActionsFooter = memo(() => {
    const footerRef = useRef<HTMLElement>(null);
    const { fade } = useScrollFade(footerRef);

    return (
        <footer
            className={twMerge("mb-2 flex h-fit w-full gap-2 overflow-x-auto overflow-y-hidden px-2 pb-2", fade)}
            ref={footerRef}
        >
            <ResetCharacterButton />
            <DownloadImageButton />
            <SaveCharacterButton />
        </footer>
    );
});

export default ActionsFooter;
