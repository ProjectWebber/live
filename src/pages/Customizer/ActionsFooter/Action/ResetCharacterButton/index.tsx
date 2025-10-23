// Hooks
import useCharacterReset from "@/hooks/CustomizerPage/ActionsFooter/useCharacterReset";

// Components
import BaseButton from "@/components/Buttons/BaseButton";
import SelectionManagerStore from "@/stores/SelectionManagerStore";

const ResetCharacterButton = () => {
    const resetSelectedAssets = SelectionManagerStore(
        (state) => state.resetSelectedAssets
    );
    const { onReset } = useCharacterReset();

    return (
        <BaseButton
            variant="primary"
            size="sm"
            onClick={() => onReset(resetSelectedAssets)}
        >
            Resetar
        </BaseButton>
    );
};

export default ResetCharacterButton;
