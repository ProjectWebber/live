// Types
import type { FileWithUrl } from "@/types/FileData/FileWithUrl";

// Utils
import organizeFileByData from "./organizeByData";
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const organizeAllFilesByData = (files: FileWithUrl[]): OrganizedFileData[] => {
    const dataOrganizedFiles = files.map((file) => organizeFileByData(file));
    return dataOrganizedFiles;
};

export default organizeAllFilesByData;
