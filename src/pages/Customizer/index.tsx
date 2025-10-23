// Hooks
import useCustomizerPage from "@/hooks/CustomizerPage/useCustomizerPage";

// Components
import SelectionPanel from "@/pages/Customizer/SelectionPanel";
import Preview from "@/pages/Customizer/Preview";
import FadeInOut from "@/components/Animations/FadeInOut";
import ActionsFooter from "@/pages/Customizer/ActionsFooter";

const CustomizerPage = () => {
    useCustomizerPage();

    return (
        <FadeInOut className="px-screen-responsive flex h-full w-full flex-1 flex-col sm:justify-between">
            <section className="flex h-full flex-1 flex-col-reverse items-center md:w-full md:flex-row md:justify-between">
                <SelectionPanel />
                <Preview />
            </section>
            <ActionsFooter />
        </FadeInOut>
    );
};

export default CustomizerPage;
