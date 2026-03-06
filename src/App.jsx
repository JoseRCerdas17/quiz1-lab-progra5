import { useState } from "react";
import useApi from "./hooks/useAPI";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const { data, loading, error } = useApi(search);

  const handleSearch = () => setSearch(query);

  return (
    <div style={styles.page}>
      {/* Header */}
      <div style={styles.header}>
        <span style={styles.ball}>⬤</span>
        <h1 style={styles.titulo}>Pokédex</h1>
      </div>

      {/* Barra de búsqueda */}
      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="🔎 Buscar Pokémon..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          style={styles.input}
        />
        <button
          onClick={handleSearch}
          style={styles.boton}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 18px rgba(255,87,51,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = "0 4px 12px rgba(255,87,51,0.35)";
          }}
        >
          Buscar
        </button>
      </div>

      {/* Estados */}
      {loading && (
        <div style={styles.estado}>
          <span style={styles.spinner}>⏳</span> Cargando Pokémon...
        </div>
      )}
      {error && (
        <div style={styles.errorBox}>
          ❌ {error}
        </div>
      )}

      {/* Resultados */}
      <div style={styles.grid}>
        {data.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(160deg, #f0f4ff 0%, #fff8e7 100%)",
    padding: "30px 20px",
    fontFamily: "'Segoe UI', sans-serif",
  },
  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "12px",
    marginBottom: "24px",
  },
  ball: {
    fontSize: "32px",
    color: "#ff5733",
  },
  titulo: {
    margin: 0,
    fontSize: "2.5rem",
    fontWeight: 900,
    background: "linear-gradient(135deg, #3b4cca, #ff5733)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  },
  searchBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    padding: "14px 18px",
    backgroundColor: "#fff",
    borderRadius: "50px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.1)",
    maxWidth: "460px",
    margin: "0 auto 30px",
  },
  input: {
    flex: 1,
    padding: "10px 16px",
    borderRadius: "50px",
    border: "2px solid #e0e0e0",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#f9f9f9",
    color: "#333",
  },
  boton: {
    padding: "10px 22px",
    borderRadius: "50px",
    border: "none",
    background: "linear-gradient(135deg, #ffcb05, #ff5733)",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
    transition: "transform 0.2s, box-shadow 0.2s",
    boxShadow: "0 4px 12px rgba(255,87,51,0.35)",
    whiteSpace: "nowrap",
  },
  estado: {
    textAlign: "center",
    fontSize: "16px",
    color: "#555",
    margin: "20px 0",
  },
  spinner: {
    fontSize: "20px",
  },
  errorBox: {
    textAlign: "center",
    backgroundColor: "#fdecea",
    color: "#c62828",
    padding: "12px 20px",
    borderRadius: "12px",
    maxWidth: "400px",
    margin: "0 auto 20px",
    fontWeight: "600",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "16px",
    justifyContent: "center",
    marginTop: "10px",
  },
};

export default App;