import captalize from "@/utils/captalize";

const parseFilters = (filterString: string): string[] => {
    let filters: string[] = [];

    if (!filterString) return filters;

    const multipleFilters: boolean = filterString.includes("$");

    if (multipleFilters) filters = filterString.split("$").map((f) => captalize(f.replaceAll("_", " ")));
    if (!multipleFilters) filters = [captalize(filterString.replaceAll("_", " "))];

    return filters;
};

export default parseFilters;
