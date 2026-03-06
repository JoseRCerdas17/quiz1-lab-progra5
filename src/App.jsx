import { useState } from "react";
import useApi from "./hooks/useApi";
import PokemonCard from "./components/PokemonCard";

// Tus compañeros van a crear estos componentes:
// import SearchBar from "./components/SearchBar";
// import PokemonCard from "./components/PokemonCard";
// import PokemonList from "./components/PokemonList";

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { data, loading, error } = useApi(search);

  const handleSearch = () => {
    setSearch(query);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🔴 Pokédex React</h1>

      {/* Barra de búsqueda - Persona 2 la estiliza */}
      <div>
        <input
          type="text"
          placeholder="Buscar pokémon por nombre..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>

      {/* Estados de carga y error */}
      {loading && <p>⏳ Cargando...</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {/* Lista de resultados - Personas 3 y 4 integrarán sus componentes aquí */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {data.map((pokemon) => (
          <div key={pokemon.id} style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "8px" }}>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p><strong>{pokemon.name}</strong></p>
            <p>Tipos: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;