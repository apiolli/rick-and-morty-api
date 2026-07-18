# Rick and Morty App 🛸

Aplicación web para buscar y explorar personajes del universo de **Rick and Morty**, consumiendo la [Rick and Morty API](https://rickandmortyapi.com/). Proyecto hecho como práctica personal para reforzar conceptos de **React + TypeScript**.

> 🚧 **Proyecto en construcción.** Es mi primer proyecto de React hecho en solitario, así que iré agregando funcionalidades y corrigiendo detalles progresivamente.

## Demo

![Vista previa de la app](./screenshot.png)

*(agrega aquí una captura de pantalla real cuando la tengas)*

## Tecnologías utilizadas

- ⚛️ **React 19**
- 🟦 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS 4** + **DaisyUI**
- 🌐 **Axios** (consumo de API)
- ✅ **ESLint**

## Funcionalidades

- [x] Buscar personajes por **nombre**, **status**, **especie**, **tipo** o **género**
- [x] Búsqueda con debounce (espera a que el usuario termine de escribir)
- [x] Búsqueda también al presionar `Enter` o el botón "Buscar"
- [x] Listado de personajes con imagen, status, especie, ubicación y episodio
- [ ] Mostrar el **nombre real del episodio** (actualmente se muestra la URL)
- [ ] Estado de carga (loading) mientras se obtienen los datos
- [ ] Mensaje de "sin resultados" cuando la búsqueda no encuentra nada
- [ ] Manejo de errores de la API (ej. búsquedas inexistentes)
- [ ] Paginación de resultados

## Instalación y uso local

Clona el repositorio:

```bash
git clone https://github.com/apiolli/rick-and-morty-api.git
cd rick-and-morty-api/rick-and-morty
```

Instala las dependencias:

```bash
npm install
```

Levanta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

## Estructura del proyecto

```
src/
├── rick-and-morty/
│   ├── actions/       # Funciones que consumen la API
│   ├── api/           # Configuración de la instancia de Axios
│   ├── components/    # Componentes propios del feature (CharactersList)
│   ├── hooks/         # Hooks personalizados (useCharacters)
│   └── types/         # Interfaces y tipos de TypeScript
├── shared/
│   ├── components/    # Componentes reutilizables (SearchBar, FiltersNav)
│   └── hooks/         # Hooks reutilizables (useBar)
├── RickAndMortyApp.tsx
└── main.tsx
```

## Aprendizajes de este proyecto

Este proyecto fue mi primer acercamiento práctico a:

- Custom hooks y separación de lógica de UI
- Manejo de efectos secundarios con `useEffect` y `useCallback`
- Consumo de APIs REST con Axios
- Tipado de respuestas de API con TypeScript
- Organización de un proyecto React por dominio/feature

## Autor

Hecho por [@apiolli](https://github.com/apiolli) como parte de mi aprendizaje de React.

---

⭐ Si tienes sugerencias o encuentras algo que se pueda mejorar, ¡son bienvenidas!
