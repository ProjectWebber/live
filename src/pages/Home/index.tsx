// Pages
import HeroSection from "@/pages/Home/HeroSection";
import PatchNotes from "@/pages/Home/PatchNotes";

// Components
import FadeInOut from "@/components/Animations/FadeInOut";

function HomePage() {
    return (
        <FadeInOut className="flex w-full flex-1 flex-col" key="HomePage">
            <HeroSection />
            <PatchNotes />
        </FadeInOut>
    );
}

export default HomePage;
