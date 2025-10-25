import type { HTMLAttributes, ReactNode } from "react";

interface ContentProps extends HTMLAttributes<HTMLDivElement> {
    modalTitle?: ReactNode;
    modalDescription?: ReactNode;
}

const Content = ({ children, modalTitle, modalDescription }: ContentProps) => {
    return (
        <div className="flex flex-col gap-1">
            <h3 className="text-2xl leading-7 text-pretty">{modalTitle}</h3>
            <span className="text-foreground-muted text-md leading-5 text-pretty ">
                {modalDescription}
            </span>
            {children}
        </div>
    );
};

export default Content;
