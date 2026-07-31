import { useState, type KeyboardEvent } from "react";

export const useBar = (getCharacter: (status: string) => void) => {
  const [filter, setFilter] = useState("");

  const handleSearch = () => {
    getCharacter(filter);
    setFilter("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return {
    filter,
    handleKeyDown,
    setFilter,
    handleSearch,
  };
};
