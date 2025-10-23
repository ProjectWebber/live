// Libs
import { create } from "zustand";

// Types
import type { OrganizedFilesProps } from "@/types/FileData/OrganizedFilesProps";

interface FilesStoreProps {
    files: null | OrganizedFilesProps;
    isLoading: boolean;
    setFiles(files: OrganizedFilesProps, isLoading: boolean): void;
}

const FilesStore = create<FilesStoreProps>((set, get) => ({
    files: null,
    isLoading: true,
    setFiles: (files: OrganizedFilesProps, isLoading: boolean) => {
        if (JSON.stringify(get().files) !== JSON.stringify(files))
            set({ files, isLoading });
    },
}));

export default FilesStore;
