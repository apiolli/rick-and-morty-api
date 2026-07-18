import type { Character } from "../types/characters.response";

interface Props {
  characters: Character[];
}

export const CharactersList = ({ characters }: Props) => {
  const selectStatus = (status: string): string | undefined => {
    if (status === "Alive") return "success";
    if (status === "Dead") return "error";
    if (status === "unknown") return "neutral";
  };

  return (
    <div className="w-full flex flex-col items-center my-10">
      <div className="w-11/12 grid grid-cols-2 justify-center items-center p-5 gap-5">
        {characters.map((character) => (
          <div
            className="flex rounded-xl h-60 overflow-hidden bg-gray-700/80 shadow-xl"
            key={character.id}
          >
            <div className="w-full">
              <img
                src={character.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-5 flex-col p-4">
              <div className="flex flex-col">
                <h3 className="text-2xl font-bold">{character.name}</h3>
                <div className="flex gap-2 justify-start items-center">
                  <div className="inline-grid *:[grid-area:1/1]">
                    <div
                      className={`status status-${selectStatus(character.status)} animate-ping`}
                    ></div>
                    <div
                      className={`status status-${selectStatus(character.status)}`}
                    ></div>
                  </div>
                  <p>
                    {character.status} - {character.species}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-olive-400">Ultima ubicacion:</p>
                <p>{character.location.name}</p>
              </div>
              <div className="flex flex-col">
                <p className="text-olive-400">Primera vez visto:</p>
                <p>{character.episode[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
