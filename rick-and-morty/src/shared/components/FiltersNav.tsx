export const FiltersNav = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <h2 className="text-2xl">Filtros</h2>
      <ul className="flex gap-5">
        <li className="bg-amber-50 text-black px-5 py-1.5  cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97">
          Nombre
        </li>
        <li className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97">
          Status
        </li>
        <li className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md  hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97">
          Especie
        </li>
        <li className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97">
          Tipo
        </li>
        <li className="bg-amber-50 text-black px-5 py-1.5 cursor-pointer rounded-md hover:bg-transparent hover:text-white transition-all font-semibold hover:scale-97">
          Genero
        </li>
      </ul>
    </div>
  );
};
