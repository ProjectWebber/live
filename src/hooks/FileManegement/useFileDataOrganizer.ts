// Libs
import { useCallback, useEffect } from "react";

// Hooks
import useFileFetcher from "@/hooks/FileManegement/useFileFetcher";

// Utils
import organizeFiles from "@/utils/filesOrganizer/organizeFiles";
import getCategoryFilters from "@/utils/filesOrganizer/getCategoryFilters";

// Stores
import FilesStore from "@/stores/FilesStore";
import FiltersStore from "@/stores/FiltersStore";

/**
 * Organiza as informações dos files(appwrite) por dados singulares de cada file, por corpo correspondente e por categoria a qual o prop pertence. Ao final, seta o object organizado em uma store feita para armazenar.
 */

function useFileDataOrganizer() {
    const { files, isFetchingFiles } = useFileFetcher().filesState;


    const setFiles = FilesStore((state) => state.setFiles);
    const setAllFilters = FiltersStore((state) => state.setAllFilters);

    // Organize Data
    const organize = useCallback(() => {
        if (!isFetchingFiles && files !== null && files.length > 0) {
            const { organizedFiles, dataOrganizedFiles } = organizeFiles(files);

            const categoriesFilters = getCategoryFilters(dataOrganizedFiles);

            setAllFilters(categoriesFilters);
            setFiles(organizedFiles, false);
        }
    }, [files, isFetchingFiles, setAllFilters, setFiles]);

    useEffect(() => {
        organize();
    }, [organize]);
}

export default useFileDataOrganizer;
