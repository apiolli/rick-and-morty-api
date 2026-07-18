interface Props {
  handleFilter: (filter: string) => void;
}

export const FiltersNav = ({ handleFilter }: Props) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl">Filtros</h2>
      <ul className="flex gap-5">
        <li
          className="bg-amber-50 text-black px-5 py-1.5  cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97"
          onClick={() => handleFilter("name")}
        >
          Nombre
        </li>
        <li
          className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97"
          onClick={() => handleFilter("status")}
        >
          Status
        </li>
        <li
          className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md  hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97"
          onClick={() => handleFilter("species")}
        >
          Especie
        </li>
        <li
          className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97"
          onClick={() => handleFilter("type")}
        >
          Tipo
        </li>
        <li
          className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97"
          onClick={() => handleFilter("gender")}
        >
          Genero
        </li>
      </ul>
    </div>
  );
};
