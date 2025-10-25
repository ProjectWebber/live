// Libs
import { useCallback, useEffect } from "react";
import { useNavigate, useParams } from "react-router";

// Stores
import SavedCharactersStore from "@/stores/SavedCharactersStore";
import SelectionManagerStore from "@/stores/SelectionManagerStore";

// Hooks
import useHistorySetter from "./useHistorySetter";

const useCharacterManagement = () => {
    const savedCharacters = SavedCharactersStore((state) => state.savedCharacters);
    const replaceSelectedAssets = SelectionManagerStore((state) => state.replaceSelectedAssets);
    const { setPreviousCharacter } = useHistorySetter();
    const { characterID } = useParams();

    const navigate = useNavigate();

    const checkCharacterExistence = useCallback(() => {
        const selectedCharacterEntries = Object.entries(savedCharacters).find((entry) => entry[0] === characterID);

        if (!selectedCharacterEntries) {
            navigate("/customizador");
            return;
        }

        return selectedCharacterEntries[1];
    }, [savedCharacters, characterID, navigate]);

    const characterSelectionDefinition = useCallback(() => {
        const response = checkCharacterExistence();

        if (!response) {
            setPreviousCharacter();
            return;
        }

        replaceSelectedAssets(response.selectedAssets);
    }, [checkCharacterExistence, setPreviousCharacter, replaceSelectedAssets]);

    useEffect(() => {
        characterSelectionDefinition();
    }, [characterSelectionDefinition]);
};

export default useCharacterManagement;
