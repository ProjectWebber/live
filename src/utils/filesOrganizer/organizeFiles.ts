// Types
import type { Models } from "appwrite";
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";
import type { FileWithUrl } from "@/types/FileData/FileWithUrl";
import type { OrganizedFilesProps } from "@/types/FileData/OrganizedFilesProps";

// Services
import { setAllFilesUrl } from "@/services/Appwrite";

// Utils
import organizeAllFilesByData from "@/utils/filesOrganizer/OrganizeByData/organizeAllFilesByData";
import organizeByBodies from "@/utils/filesOrganizer/organizeByBodies";
import organizeByCategory from "@/utils/filesOrganizer/organizeByCategory";
import getExistentBodies from "@/utils/filesOrganizer/getExistentBodies";
import getEmptyProp from "@/utils/filesOrganizer/getEmptyProp";
import { categories } from "@/utils/filesOrganizer/categories";
import getFilters from "./getFilters";

function organizeFiles(files: Models.File[]) {
    // 1. Recebe os files já com URL de imagem
    const filesWithUrl: FileWithUrl[] = setAllFilesUrl(files);

    // 2. Organiza por data
    const dataOrganizedFiles = organizeAllFilesByData(filesWithUrl);

    // 3. Obtém corpos existentes
    const bodies = getExistentBodies(dataOrganizedFiles);

    // 4. Obtém propriedades vazias
    const emptyProp = getEmptyProp(dataOrganizedFiles);

    // 5. Organiza por corpos
    const bodyOrganizedFiles = organizeByBodies(dataOrganizedFiles, bodies);

    // 6. Organiza por categoria
    const categoryOrganizedFiles = organizeByCategory(
        bodyOrganizedFiles,
        categories,
        emptyProp
    );

    const { bodyFilters, assetFilters } = getFilters(
        categoryOrganizedFiles,
        bodies
    );

    

    const organizedReturn: {
        organizedFiles: OrganizedFilesProps;
        dataOrganizedFiles: OrganizedFileData[];
    } = {
        organizedFiles: {
            bodies: bodies,
            emptyProp: emptyProp,
            categories,
            assets: categoryOrganizedFiles,
            onlyBodyOrganizedFiles: bodyOrganizedFiles,
            bodyFilters,
            assetFilters,
        },
        dataOrganizedFiles: dataOrganizedFiles,
    };

    return organizedReturn;
}

export default organizeFiles;
