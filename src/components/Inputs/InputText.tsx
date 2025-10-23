// Libs
import { twMerge } from "tailwind-merge";
import { forwardRef } from "react";

// Types
import type { InputHTMLAttributes } from "react";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
    inputTips?: string;
    labelText?: string;
}

const InputText = forwardRef<HTMLInputElement, InputTextProps>(
    ({ labelText, inputTips, onChange, id, disabled = false, className }, ref) => {
        return (
            <label
                htmlFor={id}
                className="text-foreground-muted has-focus:text-foreground flex flex-col transition-all"
            >
                {labelText}

                <input
                    ref={ref}
                    disabled={disabled}
                    type="text"
                    className={twMerge(
                        "bg-background focus:bg-background-light border-muted border-t-accent focus:outline-accent rounded border px-4 py-2 outline-offset-1 transition-all focus:outline-1",
                        className
                    )}
                    onChange={onChange}
                    id={id}
                />
                <span className="text-foreground-muted pt-0.5">{inputTips}</span>
            </label>
        );
    }
);

export default InputText;
