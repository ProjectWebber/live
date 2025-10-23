// Types
import type { Models } from "appwrite";

type FileWithUrl = Models.File & {
    url: string;
};

export type { FileWithUrl };
