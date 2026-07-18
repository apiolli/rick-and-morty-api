export const SearchBar = () => {
  return (
    <div className="flex flex-col items-center my-5 gap-6">
      <h1 className="text-4xl font-semibold">Rick And Morty API</h1>
      <div className="flex gap-5 w-6/12 justify-center">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            className="grow"
            placeholder="Buscar por status"
          />
        </label>
        <button className="bg-amber-50 text-black px-5 cursor-pointer rounded-md hover:bg-slate-200 transition-all font-semibold hover:scale-97">
          Buscar
        </button>
      </div>
    </div>
  );
};
