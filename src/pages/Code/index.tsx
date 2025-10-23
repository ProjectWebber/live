// Libs
import { useRef, useState, type ReactNode } from "react";
import { TbLoader2 } from "react-icons/tb";

// Services
import { ExecutionMethod } from "appwrite";
import { functions, ARGFUNCTION_ID } from "@/services/Appwrite";

// Components
import FadeInOut from "@/components/Animations/FadeInOut";
import BaseButton from "@/components/Buttons/BaseButton";
import InputText from "@/components/Inputs/InputText";
import ThemeStore from "@/stores/ThemeStore";

const CodePage = () => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const [statusElement, setStatusElement] = useState<ReactNode>(
        <span className="text-foreground-muted text-sm">
            <br />
        </span>
    );
    const [isSending, setIsSending] = useState<boolean>(false);
    const [inputValue, setInputValue] = useState<string>("");
    const addColorScheme = ThemeStore((state) => state.addColorScheme);
    const colorSchemes = ThemeStore((state) => state.colorSchemes);

    const handleSubmit = async () => {
        if (!inputValue || isSending || !inputRef.current) return;
        const value = inputValue.toLowerCase().trim().replaceAll(" ", "-");

        setIsSending(true);

        const response = await functions.createExecution({
            functionId: ARGFUNCTION_ID,
            method: ExecutionMethod.GET,
            xpath: `/${value}`,
        });

        switch (response.responseStatusCode) {
            case 200:
                if (colorSchemes.includes(response.responseBody)) {
                    setStatusElement(<span className="text-warning text-sm">A resposta ja foi descoberta.</span>);
                    inputRef.current.value = "";
                    setIsSending(false);
                    break;
                }
                console.log("adicionando novo tema");
                addColorScheme(response.responseBody);
                setStatusElement(<span className="text-success text-sm">Tema desbloqueado.</span>);
                inputRef.current.value = "";
                setIsSending(false);
                break;

            default:
                setStatusElement(<span className="text-error text-sm">Resposta incorreta.</span>);
                inputRef.current.value = "";
                setIsSending(false);
                break;
        }
    };

    return (
        <FadeInOut className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4">
            <div className="flex flex-col items-center gap-2">
                <span className="text-foreground">"Qual o início de tudo?"</span>
                <InputText value={inputValue} onChange={(e) => setInputValue(e.target.value)} ref={inputRef} />
            </div>
            <BaseButton
                size="sm"
                variant="primary"
                className="flex w-25 justify-center"
                onClick={handleSubmit}
                disabled={isSending}
            >
                <TbLoader2 className="animate-spin"/>
                Enviar
            </BaseButton>
            {statusElement}
        </FadeInOut>
    );
};

export default CodePage;
