// Libs
import { MdSave } from "react-icons/md";

// Types
import type { ReactNode } from "react";

const NoSuchDate = () => <></>;

const CardDate = ({ dateAndHour }: { dateAndHour: string }): ReactNode => {
    return dateAndHour !== undefined ? (
        <span className="text-foreground-muted flex items-center gap-[0.15rem]" title={dateAndHour}>
            <MdSave className="mb-0.5" size={"1.2rem"} />
            <span>{dateAndHour.split(", ")[0]}</span>
        </span>
    ) : (
        <NoSuchDate />
    );
};

export default CardDate;
