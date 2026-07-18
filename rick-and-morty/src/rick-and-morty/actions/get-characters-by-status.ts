import { api } from "../api/rick-and-morty.api";
import type {
  Character,
  CharactersResponse,
} from "../types/characters.response";

export const getCharactersByStatus = async (
  status: string,
): Promise<Character[]> => {
  const response = await api.get<CharactersResponse>(
    `/character/?status=${status}`,
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
};
