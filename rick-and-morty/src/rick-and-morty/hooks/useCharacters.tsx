import { useState } from "react";
import type { Character } from "../types/characters.response";
import { getCharactersByStatus } from "../actions/get-characters-by-status";

export const useCharacters = () => {
  const [characters, setcharacters] = useState<Character[]>([]);

  const charactersByStatus = async (status: string) => {
    const response = await getCharactersByStatus(status);
    setcharacters(response);
  };
  return {
    characters,
    charactersByStatus,
  };
};
