import { useState } from "react";
import useApi from "./hooks/useAPI";
import PokemonCard from "./components/PokemonCard";
import Busqueda from "./assets/components/Busqueda";
import Lista from "./assets/components/Listas";

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

      {/* Barra de búsqueda usando tu componente */}
      <Busqueda
        nombre={query}
        setNombre={setQuery}
        buscarPokemon={handleSearch}
      />

      {/* Estados de carga y error */}
      {loading && <p>⏳ Cargando...</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      {/* Lista de resultados */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>

      {/* Tu componente Lista también puede usar PokemonCard internamente */}
      <Lista pokemon={data} />
    </div>
  );
}

export default App;