# Rick and Morty App 🛸

Aplicación web para buscar y explorar personajes del universo de **Rick and Morty**, consumiendo la [Rick and Morty API](https://rickandmortyapi.com/). Proyecto hecho como práctica personal para reforzar conceptos de **React + TypeScript**.

> 🚧 **Proyecto en construcción.** Es mi primer proyecto de React hecho en solitario, así que iré agregando funcionalidades y corrigiendo detalles progresivamente.

## Demo

<img width="1769" height="883" alt="image" src="https://github.com/user-attachments/assets/e68932e7-fd4a-45ce-8757-af179fe5d023" />

## Tecnologías utilizadas

- ⚛️ **React 19**
- 🟦 **TypeScript**
- ⚡ **Vite**
- 🎨 **Tailwind CSS 4** + **DaisyUI**
- 🌐 **Axios** (consumo de API)
- ⏳ **react-spinners** (estado de carga)
- ✅ **ESLint**

## Funcionalidades

- [x] Buscar personajes por **nombre**, **status**, **especie**, **tipo** o **género**
- [x] Búsqueda con debounce (espera a que el usuario termine de escribir)
- [x] Búsqueda también al presionar `Enter` o el botón "Buscar"
- [x] Listado de personajes con imagen, status, especie, ubicación y episodio
- [x] Estado de carga (loading) mientras se obtienen los datos
- [x] Mensaje de "sin resultados" cuando la búsqueda no encuentra nada
- [x] Manejo de errores de la API (búsquedas inexistentes → 404 controlado, sin romper la app)
- [ ] Mostrar el **nombre real del episodio** (actualmente se muestra la URL)
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
│   ├── actions/       # Funciones que consumen la API (con manejo de errores Axios)
│   ├── api/           # Configuración de la instancia de Axios
│   ├── components/    # Componentes propios del feature (CharactersList: loading / sin resultados / listado)
│   ├── hooks/         # Hooks personalizados (useCharacters: estado de personajes, loading y errores)
│   └── types/         # Interfaces y tipos de TypeScript
├── shared/
│   ├── components/    # Componentes reutilizables (SearchBar, FiltersNav)
│   └── hooks/         # Hooks reutilizables (useBar)
├── RickAndMortyApp.tsx
└── main.tsx
```

## Manejo de errores

Uno de los puntos que reforcé en este proyecto fue distinguir entre un **error esperado** y un **error real**:

- Si la API responde **404** (por ejemplo, buscar un personaje que no existe), la app no debe romperse: simplemente se muestra la lista vacía y el mensaje de "Sin resultados".
- Si ocurre cualquier otro tipo de error (caída de red, 500, etc.), se relanza (`throw`) en lugar de silenciarlo, para no ocultar problemas reales.

Esto se resuelve con `axios.isAxiosError()` para verificar de forma segura (con tipado) si el error viene de una petición HTTP, y así decidir si se ignora (404) o se propaga.

## Aprendizajes de este proyecto

Este proyecto fue mi primer acercamiento práctico a:

- Custom hooks y separación de lógica de UI
- Manejo de efectos secundarios con `useEffect` y `useCallback`
- Consumo de APIs REST con Axios
- Manejo de errores asíncronos (`try/catch`, `axios.isAxiosError`) y la diferencia entre un error de negocio (404) y un error real
- Tipado de respuestas de API con TypeScript
- Organización de un proyecto React por dominio/feature

## Autor

Hecho por [@apiolli](https://github.com/apiolli) como parte de mi aprendizaje de React.

---

⭐ Si tienes sugerencias o encuentras algo que se pueda mejorar, ¡son bienvenidas!
