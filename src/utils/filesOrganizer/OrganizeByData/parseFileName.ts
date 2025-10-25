// Types
import type { ParsedFileName } from "@/types/FileData/ParsedFileName";

// Utils
import parseFilters from "./parseFilters";

const parseFileName = (fileName: string) => {
    const [rawAssetName, rawFilters, rawBodyBelonging]: string[] =
        fileName.split("-");

    if (!rawAssetName || !rawFilters) {
        throw new Error(`Formato inválido: ${fileName}`);
    }

    const [assetName, assetParts]: string[] = rawAssetName.split("$");

    const splitedAssetName = assetName.split("_");

    const assetNumber: number = Number(
        splitedAssetName[splitedAssetName.length - 1]
    );

    const category: string = splitedAssetName[0];

    const filters: string[] = parseFilters(rawFilters);

    const bodyBelonging: string | undefined = rawBodyBelonging || undefined;

    return {
        assetName,
        assetNumber,
        category,
        filters,
        bodyBelonging,
    } as ParsedFileName;
};

export default parseFileName;
