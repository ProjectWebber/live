// Libs
import {
	type LabelHTMLAttributes,
	type ReactNode,
	useCallback,
	memo,
} from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";

// Stores
import FiltersStore from "@/stores/FiltersStore";

const baseStyle = `max-w-fit text-nowrap whitespace-nowrap flex items-center justify-center rounded-3xl  px-4 py-1 transition-all

    bg-background-dark hover:bg-background has-checked:bg-background-light
    
    border border-muted border-t-accent has-checked:border-accent

    text-foreground-muted has-checked:text-foreground
`;

interface FilterItemProps extends LabelHTMLAttributes<HTMLLabelElement> {
	id: string;
	children: ReactNode;
	value: string;
}

const FilterItem = memo(
	({ id, children, value, className }: FilterItemProps) => {
		const addCheckedFilter = FiltersStore(
			(state) => state.addCheckedFilter,
		);
		const removeCheckedFilter = FiltersStore(
			(state) => state.removeCheckedFilter,
		);

		const handleChange = useCallback(
			(checked: boolean) => {
				if (checked) {
					addCheckedFilter(value);
					return;
				}

				removeCheckedFilter(value);
				return;
			},
			[addCheckedFilter, removeCheckedFilter, value],
		);

		return (
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.2 }}
			>
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
			</motion.div>
		);
	},
);

export default FilterItem;
