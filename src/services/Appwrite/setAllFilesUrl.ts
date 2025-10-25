// Types
import type { Models } from "appwrite";
import type { FileWithUrl } from "@/types/FileData/FileWithUrl";

// Services
import { getFileUrl, BUCKET_ID } from "@/services/Appwrite";

function setAllFilesUrl(files: Models.File[]): Array<FileWithUrl> {
    const newFiles: Array<FileWithUrl> = files.map((file) => {
        const url = getFileUrl(BUCKET_ID, file.$id);
        const newFile = { ...file, url };
        return newFile;
    });

    return newFiles;
}

export default setAllFilesUrl;
