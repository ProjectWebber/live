// Types
import type { FileWithUrl } from "@/types/FileData/FileWithUrl";
import type { BaseData } from "@/types/FileData/BaseData";
import type { ParsedFileName } from "@/types/FileData/ParsedFileName";
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

// Utils
import parseFileName from "./parseFileName";

const organizeFileByData = (
    file: FileWithUrl
): OrganizedFileData | BaseData => {
    const fileName: string = file.name.split(".")[0];
    let parsedFileName: ParsedFileName = {};

    const base: BaseData = {
        id: file.$id,
        url: file.url,
        fileName,
        assetName: fileName,
    };

    if (fileName !== "prop_vazio") {
        parsedFileName = parseFileName(fileName);
    }

    return {
        ...base,
        ...parsedFileName,
    } as OrganizedFileData;
};

export default organizeFileByData;
