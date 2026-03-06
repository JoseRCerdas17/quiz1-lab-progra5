import { useState } from "react";

function Busqueda({ nombre, setNombre, buscarPokemon }) {
  const [focused, setFocused] = useState(false);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") buscarPokemon();
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.titulo}>
        <span style={styles.pokeball}>⬤</span>
        <h1 style={styles.h1}>Pokédex</h1>
      </div>

      <div style={{ ...styles.container, boxShadow: focused ? "0 0 0 3px #ffcb05, 0 10px 30px rgba(0,0,0,0.2)" : styles.container.boxShadow }}>
        <input
          type="text"
          placeholder="Buscar Pokémon..."
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={styles.input}
        />
        <button
          onClick={buscarPokemon}
          style={styles.boton}
          onMouseEnter={(e) => {
            e.target.style.transform = "scale(1.05)";
            e.target.style.boxShadow = "0 6px 18px rgba(255,87,51,0.5)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "scale(1)";
            e.target.style.boxShadow = styles.boton.boxShadow;
          }}
        >
          🔎 Buscar
        </button>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "16px",
    padding: "30px 20px 10px",
  },
  titulo: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  pokeball: {
    fontSize: "28px",
    color: "#ff5733",
  },
  h1: {
    margin: 0,
    fontSize: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
    fontWeight: 800,
    background: "linear-gradient(135deg, #3b4cca, #ff5733)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    letterSpacing: "1px",
  },
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 18px",
    backgroundColor: "#ffffff",
    borderRadius: "50px",
    boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
    transition: "box-shadow 0.3s",
  },
  input: {
    padding: "10px 16px",
    width: "220px",
    borderRadius: "50px",
    border: "2px solid #e0e0e0",
    fontSize: "15px",
    outline: "none",
    fontFamily: "inherit",
    color: "#333",
    transition: "border-color 0.3s",
    backgroundColor: "#f9f9f9",
  },
  boton: {
    padding: "10px 20px",
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
};

export default Busqueda;