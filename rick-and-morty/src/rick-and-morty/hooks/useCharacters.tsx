import { useState, useCallback } from "react";
import type { Character } from "../types/characters.response";
import { getCharactersByParameters } from "../actions/get-characters-by-status";

export const useCharacters = (filter: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);

  const getCharacters = useCallback(
    async (query: string) => {
      const response = await getCharactersByParameters(query, filter);
      setCharacters(response);
    },
    [filter],
  );

  return {
    characters,
    getCharacters,
  };
};
