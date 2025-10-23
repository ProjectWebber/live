// Libs
import { memo } from "react";

// Components
import FiltersContainer from "./Filters";
import Grid from "./Grid";
import Tabs from "./Tabs";

const SelectionPanel = memo(() => {
    return (
        <section className="flex h-[54%] md:max-h-85 xl:max-h-95 md:max-w-85 lg:max-w-110 xl:max-w-150 w-full flex-1 flex-col">
            <Tabs />
            <Grid />
            <FiltersContainer />
        </section>
    );
});

export default SelectionPanel;
