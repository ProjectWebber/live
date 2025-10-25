import { create } from "zustand/react";

interface LayoutScrollStoreProps {
    componentRef: { current: null | HTMLElement };
}

const LayoutScrollStore = create(
    (): LayoutScrollStoreProps => ({
        componentRef: { current: null },
    })
);

export default LayoutScrollStore;
