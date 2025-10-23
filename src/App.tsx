// Libs
import { useEffect } from "react";
import { BrowserRouter as Router } from "react-router";

// Routing
import PageRouting from "@/routes/PageRouting";

// Stores
import ThemeStore from "./stores/ThemeStore";
//import useThemeStore from "@/stores/ThemeStore";

function App() {
    const { theme, currentScheme, themeInitializer } = ThemeStore();

    useEffect(() => {
        themeInitializer();

        const html = document.getElementsByTagName("html")[0];
        html.setAttribute("data-theme", theme);
        html.setAttribute("color-scheme", currentScheme);
    }, [themeInitializer, theme, currentScheme]);

    return (
        <Router basename="beta">
            <PageRouting />
        </Router>
    );
}

export default App;
