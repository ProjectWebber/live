import { create } from "zustand/react";
import type { JSX } from "react";

interface MenuStoreProps {
    Menu: JSX.Element | null;
    setMenu(newMenu: JSX.Element): void;
    closeMenu(): void;
}

const MenuStore = create<MenuStoreProps>((set) => ({
    Menu: null,
    setMenu: (newMenu: JSX.Element) => set({ Menu: newMenu }),
    closeMenu: () => set({ Menu: null }),
}));

export default MenuStore;
