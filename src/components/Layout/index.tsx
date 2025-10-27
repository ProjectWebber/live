// Types
import type { HTMLAttributes } from "react";

// Stores
import LayoutScrollStore from "@/stores/LayoutScrollStore";

// Components
import Header from "./Header";
import BackgroundImage from "./BackgroundImage";
import MenuContainer from "./Menu/MenuContainer";
import NotificationContainer from "./NotificationContainer";
import ModalContainer from "./ModalContainer";

const Layout = ({ children }: HTMLAttributes<HTMLElement>) => {
    const componentRef = LayoutScrollStore().componentRef;

    return (
        <main
            className="bg-linear-gradient relative flex h-[100dvh] w-[100dvw] flex-col overflow-y-scroll pt-15"
            id="page-layout"
            ref={componentRef}
        >
            <div className="z-1 flex h-full w-full flex-1 shrink-0 flex-col">
                <Header />

                <section className="relative h-full w-full flex-1 shrink-0">
                    <NotificationContainer />
                    {children}
                </section>
            </div>
            <MenuContainer />
            <ModalContainer />
            <BackgroundImage />
        </main>
    );
};

export default Layout;
