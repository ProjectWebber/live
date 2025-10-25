// Types
import type { Categories } from "@/types/Categories";
import type { Bodies } from "../Bodies";

type ParsedFileName = {
    assetName?: string;
    assetNumber?: number;
    category?: Categories;
    filters?: string[];
    bodyBelonging: Bodies;
};

export type { ParsedFileName };
