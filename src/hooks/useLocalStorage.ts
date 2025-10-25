// Libs
import { useCallback } from "react";

function useLocalStorage() {
    const setData = useCallback(
        (key, newData) => localStorage.setItem(key, JSON.stringify(newData)),
        []
    );

    const getData = useCallback((key) => {
        const data = localStorage.getItem(key);

        if (data === undefined || data == null) {
            return undefined;
        }

        return JSON.parse(data);
    }, []);

    return {
        setData,
        getData,
    };
}

export default useLocalStorage;
