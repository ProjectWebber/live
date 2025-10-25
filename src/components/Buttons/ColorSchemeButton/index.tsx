import ThemeStore from "@/stores/ThemeStore";
import BaseButton from "../BaseButton";
import captalize from "@/utils/captalize";

const ColorSchemeButton = () => {
    const colorSchemes = ThemeStore((state) => state.colorSchemes);
    const currentScheme = ThemeStore((state) => state.currentScheme);
    const switchScheme = ThemeStore((state) => state.switchScheme);

    return colorSchemes.length === 1 ? (
        <></>
    ) : (
        <BaseButton size="sm" variant="primary" className="w-22 flex justify-center" onClick={() => switchScheme()}>
            {captalize(currentScheme !== "" ? currentScheme : "Default")}
        </BaseButton>
    );
};

export default ColorSchemeButton;
