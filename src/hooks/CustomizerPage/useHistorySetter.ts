// Libs
import { useCallback } from "react";

// Hooks
import useLocalStorage from "@/hooks/useLocalStorage";

// Stores
import SelectionManagerStore from "@/stores/SelectionManagerStore";

const useHistorySetter = () => {
    const getData = useLocalStorage().getData;
    const replaceSelectedAssets = SelectionManagerStore(
        (state) => state.replaceSelectedAssets
    );

    const setPreviousCharacter = useCallback(() => {
        const previousCharacter = getData("previousCharacter");

        if (previousCharacter !== null && previousCharacter !== undefined) {
            replaceSelectedAssets(previousCharacter);
        }
    }, [getData, replaceSelectedAssets]);

    return { setPreviousCharacter };
};

export default useHistorySetter;
