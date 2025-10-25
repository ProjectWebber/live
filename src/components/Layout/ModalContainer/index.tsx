// Libs
import { twMerge } from "tailwind-merge";

// Stores
import ModalStore from "@/stores/ModalStore";

const ModalContainer = () => {
    const modal = ModalStore((state) => state.modal);
    const confirmationModal = ModalStore((state) => state.confirmationModal);

    return (
        <section
            className={twMerge(
                "px-screen-responsive fixed top-0 z-2 h-full w-full flex-1 items-center justify-center transition-all",
                modal && "bg-background-dark/70 backdrop-blur-xs",
                modal || confirmationModal ? "flex" : "hidden"
            )}
        >
            {modal && modal}
            <div
                className={twMerge(
                    "fixed w-full h-full hidden flex-1 items-center justify-center z-3",
                    confirmationModal &&
                        "bg-background-dark/70 flex backdrop-blur-xs"
                )}
            >
                {confirmationModal && confirmationModal}
            </div>
        </section>
    );
};

export default ModalContainer;
