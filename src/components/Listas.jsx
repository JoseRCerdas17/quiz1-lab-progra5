import PokemonCard from "./pokemonCard";

function Lista({ pokemon }) {

  return (
    <div style={estilos.container}>
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

const estilos = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "30px",
    padding: "20px",
    minHeight: "200px",
    background: "rgba(255,255,255,0.05)",
    borderRadius: "15px"
  }
};

export default Lista;