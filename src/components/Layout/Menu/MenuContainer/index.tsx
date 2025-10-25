// Stores
import MenuStore from "@/stores/MenuStore";
import { AnimatePresence } from "motion/react";

const MenuContainer = () => {
    const Menu = MenuStore((state) => state.Menu);

    return (
        <section className="fixed top-0 h-fit w-full z-6">
            <AnimatePresence mode="wait">{Menu && Menu}</AnimatePresence>
        </section>
    );
};

export default MenuContainer;
