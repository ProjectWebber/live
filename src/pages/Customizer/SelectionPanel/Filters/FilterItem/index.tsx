import FiltersStore from "@/stores/FiltersStore";
import {
    type LabelHTMLAttributes,
    type ReactNode,
    type FormEvent,
    useState,
    useEffect,
    useCallback,
    memo,
} from "react";
import { twMerge } from "tailwind-merge";

const baseStyle = `max-w-fit text-nowrap flex items-center justify-center rounded-3xl  px-4 py-1 transition-all

    bg-background-dark hover:bg-background has-checked:bg-background-light
    
    border border-muted border-t-accent has-checked:border-accent

    text-foreground-muted has-checked:text-foreground
    `;

interface FilterItemProps extends LabelHTMLAttributes<HTMLLabelElement> {
    id: string;
    children: ReactNode;
    value: string;
}

const FilterItem = memo(({ id, children, value, className }: FilterItemProps) => {
    const addCheckedFilter = FiltersStore((state) => state.addCheckedFilter);
    const removeCheckedFilter = FiltersStore((state) => state.removeCheckedFilter);

    const handleChange = useCallback(
        (checked: boolean) => {
            if (checked) {
                addCheckedFilter(value);
                return;
            }

            removeCheckedFilter(value);
            return;
        },
        [addCheckedFilter, removeCheckedFilter, value]
    );

    return (
        <label className={twMerge(baseStyle, className)} htmlFor={id}>
            <input
                type="checkbox"
                className="hidden"
                id={id}
                value={value}
                onChange={(e) => handleChange(e.target.checked)}
            />
            {children}
        </label>
    );
});

export default FilterItem;
