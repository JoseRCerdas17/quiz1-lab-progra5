
import PokemonCard from "./pokemonCard.jsx";

function Lista({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div style={styles.container}>
      <div style={styles.badge}>✅ Pokémon encontrado</div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    gap: "12px",
    animation: "fadeIn 0.4s ease",
  },
  badge: {
    backgroundColor: "#e8f5e9",
    color: "#2e7d32",
    padding: "6px 16px",
    borderRadius: "50px",
    fontSize: "13px",
    fontWeight: "600",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    letterSpacing: "0.5px",
  },
};

export default Lista;