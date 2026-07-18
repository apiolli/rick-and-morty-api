import { useState } from "react";
import { CharactersList } from "./rick-and-morty/components/CharactersList";
import { useCharacters } from "./rick-and-morty/hooks/useCharacters";
import { FiltersNav } from "./shared/components/FiltersNav";
import { SearchBar } from "./shared/components/SearchBar";

export const RickAndMortyApp = () => {
  const [filter, setfilter] = useState("status");
  const { getCharacters, characters } = useCharacters(filter.toLowerCase());

  const handleFilter = (filterBtn: string) => {
    console.log(filter);
    setfilter(`${filterBtn}`);
  };

  return (
    <>
      <SearchBar getCharacter={getCharacters} placeHolder={filter} />
      <FiltersNav handleFilter={handleFilter} />
      <CharactersList characters={characters} />
    </>
  );
};
