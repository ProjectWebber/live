// Libs
import { motion, type HTMLMotionProps } from "motion/react";

const FadeInOut = ({ ...props }: HTMLMotionProps<"section">) => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
            transition={{duration: 0.1}}
			{...props}
		/>
	);
};

export default FadeInOut;
