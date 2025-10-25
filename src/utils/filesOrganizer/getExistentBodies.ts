// Types
import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const getExistentBodies = (
    dataOrganizedFiles: OrganizedFileData[]
): OrganizedFileData[] => {
    const bodies: OrganizedFileData[] = dataOrganizedFiles.filter(
        (file) => file.category === "corpos"
    );

    return bodies;
};

export default getExistentBodies;
