import { useState, useCallback } from "react";
import type { Character } from "../types/characters.response";
import { getCharactersByParameters } from "../actions/get-characters-by-status";
import { isAxiosError } from "axios";

export const useCharacters = (filter: string) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(true);

  const getCharacters = useCallback(
    async (query: string) => {
      try {
        setLoading(true);

        const response = await getCharactersByParameters(query, filter);
        setCharacters(response);

        setLoading(false);
      } catch (err) {
        if (isAxiosError(err) && err.response?.status === 404) {
          setCharacters([]);
        }
      }
    },
    [filter],
  );

  return {
    characters,
    getCharacters,
    loading,
  };
};
