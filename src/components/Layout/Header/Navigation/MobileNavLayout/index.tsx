import ThemeButton from "../../../../Buttons/ThemeButton";
import MenuButton from "../../../../Buttons/MenuButton";
import ColorSchemeButton from "@/components/Buttons/ColorSchemeButton";

const MobileNavLayout = () => {
    return (
        <div className="flex items-center gap-3 h-8">
            <ColorSchemeButton />
            <ThemeButton />
            <MenuButton />
        </div>
    );
};

export default MobileNavLayout;
