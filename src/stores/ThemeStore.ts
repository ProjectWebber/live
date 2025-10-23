import { create } from "zustand/react";

interface ThemeStoreProps {
    theme: "light" | "dark";
    currentScheme: string;
    colorSchemes: string[];
    themeInitializer(): void;
    switchTheme(): void;
    addColorScheme(newScheme: string): void;
    switchScheme(): void;
}

const ThemeStore = create<ThemeStoreProps>((set, get) => ({
    theme: "light",
    currentScheme: (() => {
        const savedCurrentScheme = localStorage.getItem("currentScheme");

        if (!savedCurrentScheme) return "";

        return savedCurrentScheme;
    })(),
    colorSchemes: (() => {
        const colorSchemesString = localStorage.getItem("colorSchemes");

        if (!colorSchemesString) return [""];
        const colorSchemes: string[] = JSON.parse(colorSchemesString);
        console.log(colorSchemes);
        return colorSchemes;
    })(),

    themeInitializer: () => {
        const theme = localStorage.getItem("theme");

        switch (theme) {
            case "light":
                set({ theme: "light" });
                break;

            case "dark":
                set({ theme: "dark" });
                break;

            default:
                localStorage.setItem("theme", "light");
                break;
        }
    },
    switchTheme: () => {
        const newTheme: "light" | "dark" = get().theme === "light" ? "dark" : "light";

        localStorage.setItem("theme", newTheme);

        set({ theme: newTheme });
    },
    addColorScheme: (newScheme: string) => {
        const colorSchemes = get().colorSchemes;
        localStorage.setItem("colorSchemes", JSON.stringify([...colorSchemes, newScheme]));
        set((state) => ({ colorSchemes: [...state.colorSchemes, newScheme], currentScheme: newScheme }));
    },
    switchScheme: () => {
        const colorSchemes = get().colorSchemes;
        const currentScheme = get().currentScheme;

        let newIndex = colorSchemes.indexOf(currentScheme) + 1;
        if (newIndex > colorSchemes.length - 1) newIndex = 0;

        localStorage.setItem("currentScheme", colorSchemes[newIndex]);

        set({
            currentScheme: colorSchemes[newIndex],
        });
    },
}));

export default ThemeStore;
