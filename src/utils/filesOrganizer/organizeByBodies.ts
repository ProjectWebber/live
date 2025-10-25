import type { OrganizedFileData } from "@/types/FileData/OrganizedFileData";

const organizeByBodies = (
    dataOrganizedFiles: OrganizedFileData[],
    bodies: OrganizedFileData[]
): { [i: string]: OrganizedFileData[] } => {
    const bodyOrganizedFiles: { [i: string]: OrganizedFileData[] } = {};

    bodies.forEach((body: OrganizedFileData) => {
        const bodyBelongingFiles: OrganizedFileData[] =
            dataOrganizedFiles.filter(
                (file) => file.bodyBelonging === body.assetName
            );

        bodyOrganizedFiles[body.assetName] = bodyBelongingFiles;
    });

    return bodyOrganizedFiles;
};

export default organizeByBodies;
