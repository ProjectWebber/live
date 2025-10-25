// Types
import type { Categories } from "@/types/Categories";

type CategoriesProps = {
    [Category in Categories]: string;
};

export type { CategoriesProps };
