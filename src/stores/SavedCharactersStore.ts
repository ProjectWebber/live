// Libs
import { create } from "zustand";

// Types
import type { savedCharactersDictProps, savedCharacterProps } from "@/types/SavedCharacterProps";

interface savedCharactersStoreProps {
    savedCharacters: savedCharactersDictProps;
    saveCharacter: (id: string, characterData: savedCharacterProps) => void;
    removeCharacter: (id: string) => void;
    replaceCharacter: (id: string, characterData: savedCharacterProps) => void;
}

const getStoredData = () => {
    const storedData = localStorage.getItem("savedCharacters");

    if (storedData === undefined || storedData === null) return {};

    return JSON.parse(storedData);
};

const SavedCharactersStore = create<savedCharactersStoreProps>((set, get) => ({
    savedCharacters: getStoredData(),

    saveCharacter: (id, characterData) => {
        const currentCharactersString = localStorage.getItem("savedCharacters");
        let newSavedCharacters = {};

        if (!currentCharactersString) {
            newSavedCharacters = { [id]: characterData };
        }

        if (currentCharactersString) {
            const currentCharactersObject = JSON.parse(currentCharactersString);
            newSavedCharacters = {
                ...currentCharactersObject,
                [id]: characterData,
            };
        }

        localStorage.setItem("savedCharacters", JSON.stringify(newSavedCharacters));

        set({ savedCharacters: newSavedCharacters });
    },

    removeCharacter: (id) => {
        const currentCharacters = get().savedCharacters;
        const newCharacters = Object.fromEntries(
            Object.entries(currentCharacters).filter(([savedId]) => savedId !== id)
        );

        localStorage.setItem("savedCharacters", JSON.stringify(newCharacters));
        set({ savedCharacters: newCharacters });
    },
    replaceCharacter: (id, newData) => {
        const savedCharacters = get().savedCharacters;
        const newSavedCharacters = Object.fromEntries(
            Object.entries(savedCharacters).map(([savedId, data]) => {
                if (savedId === id) return [savedId, newData];
                return [savedId, data];
            })
        );

        localStorage.setItem("savedCharacters", JSON.stringify(newSavedCharacters));

        set({ savedCharacters: newSavedCharacters });
    },
}));

export default SavedCharactersStore;
