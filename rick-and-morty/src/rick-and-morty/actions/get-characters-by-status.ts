import { isAxiosError } from "axios";
import { api } from "../api/rick-and-morty.api";
import type {
  Character,
  CharactersResponse,
} from "../types/characters.response";

export const getCharactersByParameters = async (
  query: string,
  parameter: string,
): Promise<Character[]> => {
  if (query === "" || parameter === "") return [];

  try {
    const response = await api.get<CharactersResponse>(
      `/character/?${parameter}=${query}`,
    );

    return response.data.results.map((character) => ({
      id: character.id,
      name: character.name,
      status: character.status,
      species: character.species,
      type: character.type,
      gender: character.gender,
      origin: character.origin,
      location: character.location,
      image: character.image,
      episode: character.episode,
      url: character.url,
      created: character.created,
    }));
  } catch (err) {
    if (isAxiosError(err) && err.response?.status === 404) {
      return [];
    }
    throw err;
  }
};
