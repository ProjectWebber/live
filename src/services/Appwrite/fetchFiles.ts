// Libs
import { Query } from "appwrite";

// Types
import type { Models } from "appwrite";

// Services
import { storage } from "@/services/Appwrite";

const fetchFiles = async (BUCKET_ID: string): Promise<Models.File[]> => {
    try {
        const response: Models.FileList = await storage.listFiles(BUCKET_ID, [
            Query.limit(100),
        ]);
        return response.files;
    } catch (error) {
        console.error("Error fetching files in fetchFiles():", error);
        throw error;
    }
};

export default fetchFiles;
