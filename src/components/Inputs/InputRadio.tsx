// Libs
import { twMerge } from "tailwind-merge";

// Types
import { type InputHTMLAttributes } from "react";

const InputRadio = ({
    id,
    name,
    checked,
    onChange,
    className,
    children,
}: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <label htmlFor={id} className={twMerge("flex", className)}>
            <input
                type="radio"
                name={name}
                id={id}
                checked={checked}
                onChange={onChange}
                className="hidden"
            />
            {children}
        </label>
    );
};

export default InputRadio;
