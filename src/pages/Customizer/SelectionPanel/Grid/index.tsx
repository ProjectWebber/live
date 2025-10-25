// Hooks
import useGridData from "@/hooks/CustomizerPage/Grid/useGridData";

const Grid = () => {
    const { GridContent } = useGridData();

    return <>{GridContent}</>;
};

export default Grid;
