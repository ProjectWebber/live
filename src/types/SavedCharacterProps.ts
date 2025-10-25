// Types
import type { CategoriesProps } from "@/types/CategoriesProps";

interface savedCharacterProps {
    name: string;
    saveDate: string;
    editDate?: string;
    lowQualityImageUrl: string;
    selectedAssets: CategoriesProps;
}

interface savedCharactersDictProps {
    [index: string]: savedCharacterProps;
}

export type { savedCharacterProps, savedCharactersDictProps };
