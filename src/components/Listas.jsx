
import PokemonCard from "./PokemonCard";
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
    justifyContent: "center"
  }
};

export default Lista;

