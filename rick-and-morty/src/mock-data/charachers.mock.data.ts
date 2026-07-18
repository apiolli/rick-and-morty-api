interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  origin: string;
  location: string;
  image: string;
  episode: string[];
}

export const mockCharacters: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    origin: "Earth (C-137)",
    location: "Citadel of Ricks",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    episode: ["S01E01", "S01E02"],
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",
    origin: "unknown",
    location: "Citadel of Ricks",
    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    episode: ["S01E01"],
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Dead",
    species: "Human",
    origin: "Earth (Replacement Dimension)",
    location: "Earth (Replacement Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
    episode: ["S01E01", "S01E03"],
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "unknown",
    species: "Human",
    origin: "Earth (Rep Dimension)",
    location: "Earth (Rep Dimension)",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
    episode: ["S01E02"],
  },
  {
    id: 5,
    name: "Alien Morty",
    status: "Alive",
    species: "Alien",
    origin: "unknown",
    location: "Ci Ricks",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
    episode: ["S02E01"],
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Dead",
    species: "Alien",
    origin: "Abadango",
    location: "Abadango",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
    episode: ["S02E05"],
  },
];

// export const mockCharacterResponse: CharacterResponse = {
//   info: {
//     count: 826,
//     pages: 42,
//     next: "https://rickandmortyapi.com/api/character?page=2",
//     prev: null,
//   },
//   results: mockCharacters,
// };
