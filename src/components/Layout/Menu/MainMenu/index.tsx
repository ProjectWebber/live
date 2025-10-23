// Libs
import { motion } from "motion/react";

// Stores
import MenuStore from "@/stores/MenuStore";

// Components
import Logo from "@/components/Logo";
import BaseLink from "@/components/Buttons/BaseLink";

const MainMenu = () => {
    const closeMenu = MenuStore((state) => state.closeMenu);

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.05, duration: 0.3 }}
            className="from-background-gradient-start/50 to-background-gradient-end/50 px-screen-responsive absolute top-0 z-10 flex h-[100dvh] w-full max-w-[100dvw] flex-col justify-between bg-linear-to-br px-8 py-12 backdrop-blur-lg"
        >
            <Logo className="h-fit w-full max-w-100" />

            <section className="flex justify-between text-xl drop-shadow-lg">
                <nav className="flex flex-col gap-4">
                    <BaseLink
                        to=""
                        variant="default"
                        hasActiveState
                        underlined
                        closeOnNavigate
                    >
                        Início
                    </BaseLink>
                    <BaseLink
                        to="customizador"
                        variant="default"
                        hasActiveState
                        underlined
                        closeOnNavigate
                    >
                        Criar Personagem
                    </BaseLink>
                    <BaseLink
                        to="meus-personagens"
                        variant="default"
                        hasActiveState
                        underlined
                        closeOnNavigate
                    >
                        Meus Personagens
                    </BaseLink>
                    <br />
                    <button
                        className="text-foreground w-fit"
                        onClick={closeMenu}
                    >
                        Fechar Menu
                    </button>
                </nav>
                <nav className="flex flex-col items-end justify-end gap-4">
                    <BaseLink
                        isExternal
                        href="https://discord.gg/KXJ8VGQYmT"
                        className="text-discord"
                        underlined
                    >
                        Discord
                    </BaseLink>
                    <BaseLink
                        isExternal
                        href="https://www.catarse.me/project_webber"
                        className="text-catarse"
                        underlined
                    >
                        Apoiar
                    </BaseLink>
                    <BaseLink
                        isExternal
                        href="https://forms.gle/bYoSxrikGCGA6ffK7"
                        className="text-golden"
                        underlined
                    >
                        Feedback
                    </BaseLink>
                </nav>
            </section>
        </motion.section>
    );
};

export { MainMenu };