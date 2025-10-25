// Types
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const getEmptyProp = (
    dataOrganizedFiles: OrganizedFileData[]
): OrganizedFileData => {
    const emptyProp: OrganizedFileData = dataOrganizedFiles.filter(
        (file) => file.fileName === "prop_vazio"
    )[0];

    return emptyProp;
};

export default getEmptyProp;
