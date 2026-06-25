import { useCallback } from "react";
import useLocalStorage from "./useLocalStorage";

const MAX_LIMIT = 5;

function useRecentSearch() {
  const [searchHistory, setSearchHistory] = useLocalStorage<string[]>(
    "search_history",
    [],
  );

  const addQuery = useCallback(
    (query: string) => {
      const queryTrim = query.trim();
      if (!queryTrim) return;

      setSearchHistory((prevQueries) => {
        const filtered = prevQueries.filter((item) => item !== queryTrim);
        return [queryTrim, ...filtered].slice(0, MAX_LIMIT);
      });
    },
    [setSearchHistory],
  );
  const removeQuery = useCallback(
    (query: string) => {
      const queryTrim = query.trim();

      setSearchHistory((prevQueries) => {
        return prevQueries.filter((item) => item !== queryTrim);
      });
    },
    [setSearchHistory],
  );
  const clearAll = useCallback(() => {
    setSearchHistory([]);
  }, [setSearchHistory]);

  return {
    searchHistory,
    addQuery,
    removeQuery,
    clearAll,
  };
}

export default useRecentSearch;
