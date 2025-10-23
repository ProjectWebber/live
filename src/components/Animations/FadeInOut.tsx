// Libs
import { motion } from "motion/react";

// Types
import type { HTMLMotionProps } from "motion/react";

const FadeInOut = ({ ...props }: HTMLMotionProps<"section">) => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{duration: 0.15}}
            {...props}
        />
    );
};

export default FadeInOut;
