// Services
import { storage } from "@/services/Appwrite";

const getFileUrl = (BUCKET_ID: string, fileId: string): string => {
    try {
        const fileUrl: string = storage.getFileView(BUCKET_ID, fileId);
        return fileUrl;
    } catch (error) {
        console.error("Error getting the file url in getFileUrl():", error);
        throw error;
    }
};

export default getFileUrl;
