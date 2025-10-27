// Libs
import { memo } from "react";

// Components
import FiltersContainer from "./Filters";
import Grid from "./Grid";
import Tabs from "./Tabs";

const SelectionPanel = memo(() => {
    return (
        <section className="flex h-[55%] w-full flex-1 shrink-0 flex-col md:max-h-85 md:max-w-85 lg:max-w-110 xl:max-h-95 xl:max-w-150">
            <Tabs />
            <Grid />
            <FiltersContainer />
        </section>
    );
});

export default SelectionPanel;
