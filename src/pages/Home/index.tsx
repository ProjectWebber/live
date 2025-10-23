// Pages
import HeroSection from "@/pages/Home/HeroSection";

// Components
import FadeInOut from "@/components/Animations/FadeInOut";

function HomePage() {
    return (
        <FadeInOut className="flex w-full flex-1 flex-col" key="HomePage">
            <HeroSection />
        </FadeInOut>
    );
}

export default HomePage;
