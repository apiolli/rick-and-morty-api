import { useState } from "react";
import { CharactersList } from "./rick-and-morty/components/CharactersList";
import { useCharacters } from "./rick-and-morty/hooks/useCharacters";
import { FiltersNav } from "./shared/components/FiltersNav";
import { SearchBar } from "./shared/components/SearchBar";

export const RickAndMortyApp = () => {
  const { charactersByStatus, characters } = useCharacters();

  const [filter, setfilter] = useState("Buscar por Status");

  const handleFilter = (filter: string) => {
    setfilter(`Buscar por ${filter}`);
  };

  return (
    <>
      <SearchBar getCharacter={charactersByStatus} placeHolder={filter} />
      <FiltersNav handleFilter={handleFilter} />
      <CharactersList characters={characters} />
    </>
  );
};
