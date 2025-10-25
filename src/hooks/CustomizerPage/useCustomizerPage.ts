// Hooks
import useFileDataOrganizer from "@/hooks/FileManegement/useFileDataOrganizer";
import useCharacterManagement from "@/hooks/CustomizerPage/useCharacterManagement";
import useFilters from "./useFilters";

const useCustomizerPage = () => {
    useFileDataOrganizer();
    useFilters();
    useCharacterManagement();
};

export default useCustomizerPage;
