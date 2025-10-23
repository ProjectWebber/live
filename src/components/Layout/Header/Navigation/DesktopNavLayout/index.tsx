// Components
import BaseLink from "@/components/Buttons/BaseLink";
import ThemeButton from "../../../../Buttons/ThemeButton";
import ColorSchemeButton from "@/components/Buttons/ColorSchemeButton";

const DesktopNav = () => {
    return (
        <div className="flex h-8 gap-8">
            <div className="flex gap-4">
                <div className="flex gap-4">
                    <BaseLink to="" hasActiveState underlined>
                        Início
                    </BaseLink>
                    <BaseLink to="customizador" hasActiveState underlined>
                        Customizador
                    </BaseLink>
                    <BaseLink to="meus-personagens" hasActiveState underlined>
                        Meus Personagens
                    </BaseLink>
                </div>
                <span className="text-foreground leading-8">|</span>
                <div className="flex items-center gap-4">
                    <BaseLink href="https://discord.gg/KXJ8VGQYmT" isExternal variant="primary" underlined>
                        Discord
                    </BaseLink>
                    <BaseLink href="https://forms.gle/bYoSxrikGCGA6ffK7" isExternal variant="primary" underlined>
                        Feedback
                    </BaseLink>
                    <BaseLink
                        type="button"
                        href="https://www.catarse.me/project_webber"
                        isExternal
                        variant="primary"
                        underlined
                    >
                        Apoio
                    </BaseLink>
                </div>
            </div>
            <div className="flex h-full gap-3">
                <ColorSchemeButton />
                <ThemeButton />
            </div>
        </div>
    );
};

export default DesktopNav;
