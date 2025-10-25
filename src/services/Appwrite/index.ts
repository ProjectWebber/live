// Libs
import { Client, Storage, Functions } from "appwrite";

// Services
import getFileUrl from "./getFileUrl";
import fetchFiles from "./fetchFiles";
import setAllFilesUrl from "./setAllFilesUrl";

// Env Variables
const PROJECT_ENDPOINT: string = import.meta.env.VITE_PROJECT_ENDPOINT;
const PROJECT_ID: string = import.meta.env.VITE_PROJECT_ID;
const BUCKET_ID: string = import.meta.env.VITE_BUCKET_ID;
const ARGFUNCTION_ID: string = import.meta.env.VITE_ARGFUNCTION_ID;

const client: Client = new Client();
client.setEndpoint(PROJECT_ENDPOINT).setProject(PROJECT_ID);

export const functions = new Functions(client);
export const storage = new Storage(client);
export { client, BUCKET_ID, ARGFUNCTION_ID, fetchFiles, getFileUrl, setAllFilesUrl };
