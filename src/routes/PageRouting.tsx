// Libs
import { lazy } from "react";
import { Route, Routes, useLocation } from "react-router";

// Pages
const HomePage = lazy(() => import("@/pages/Home"));
const CustomizerPage = lazy(() => import("@/pages/Customizer"));
const MyCharactersPage = lazy(() => import("@/pages/MyCharacters"));
const CodePage = lazy(() => import("@/pages/Code"));
import NotFoundPage from "@/pages/NotFound";

// Components
import Layout from "@/components/Layout";
import { AnimatePresence } from "motion/react";

function PageRouting() {
    const location = useLocation();

    return (
        <Layout>
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/codigo" element={<CodePage />} />
                    <Route path="/customizador" element={<CustomizerPage />} />
                    <Route path="/customizador/:characterID" element={<CustomizerPage />} />
                    <Route path="/meus-personagens" element={<MyCharactersPage />} />
                    <Route path="/*" element={<NotFoundPage />} />
                </Routes>
            </AnimatePresence>
        </Layout>
    );
}

export default PageRouting;
