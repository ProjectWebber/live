// Libs
import { useNavigate } from "react-router";

// Components
import BaseButton from "@/components/Buttons/BaseButton";

// Assets
import heroImageAsset from "./assets/hero-characters-image.avif";

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section
            className="px-screen-responsive flex w-full flex-col items-center gap-9 pt-8 pb-14 sm:flex-row sm:justify-between sm:gap-0 sm:py-6 md:py-16"
            id="hero"
        >
            <img
                src={heroImageAsset}
                alt="Imagem ilustrativa dos personagens"
                className="drop-shadow-primary h-fit w-full max-w-100 object-contain sm:order-2 sm:max-h-none sm:max-w-[50%] lg:max-w-[53%] 2xl:max-w-[53rem]"
            />

            <div className="flex h-fit w-full max-w-full min-w-[19rem] flex-col justify-center gap-6 md:max-w-[24rem] md:min-w-[24rem] lg:max-w-[29rem] lg:min-w-[29rem] lg:gap-9 2xl:max-w-[37rem] 2xl:min-w-[37rem] 2xl:gap-11">
                <div className="flex w-full min-w-[14rem] flex-col gap-1 lg:gap-1.5">
                    <h1 className="text-foreground xs:text-[2.75rem] xs:max-w-90 max-w-85 text-[2.36rem] leading-10 lg:max-w-120 lg:text-[3.50rem] lg:leading-13 2xl:max-w-145 2xl:text-7xl 2xl:leading-20">
                        Personalize o seu personagem!
                    </h1>

                    <p className="text-foreground-muted xs:max-w-90 max-w-full text-lg leading-6 2xl:max-w-110 2xl:text-2xl 2xl:leading-9">
                        Transforme ideias em um personagem único e estiloso.
                    </p>
                </div>

                <div className="flex">
                    <BaseButton
                        variant="primary"
                        rounded="fullRounded"
                        size="md"
                        onClick={() => navigate("customizador")}
                    >
                        Criar Personagem
                    </BaseButton>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
