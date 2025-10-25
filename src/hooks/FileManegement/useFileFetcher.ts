// Libs
import { useEffect, useState } from "react";

// Types
import type { Models } from "appwrite";

// Services
import { BUCKET_ID, fetchFiles } from "@/services/Appwrite";

interface FilesStateType {
    files: null | Models.File[];
    isFetchingFiles: boolean;
}

const useFileFetcher = () => {
    const [filesState, setFilesState] = useState<FilesStateType>({
        files: null,
        isFetchingFiles: true,
    });

    useEffect(() => {
        const getFiles = async () => {
            const files: Models.File[] = await fetchFiles(BUCKET_ID);

            setFilesState({ files, isFetchingFiles: false });
        };

        getFiles();
    }, []);

    return { filesState };
};

export default useFileFetcher;
