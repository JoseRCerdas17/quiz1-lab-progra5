function PokemonCard({ pokemon }) {

  if (!pokemon) {
    return <p>No se encontró el Pokémon</p>;
  }

  return (
    <div style={estilos.card}>
      <h2>{pokemon.name}</h2>

      <img
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />

      <p>Peso: {pokemon.weight}</p>
      <p>Altura: {pokemon.height}</p>
    </div>
  );
}

const estilos = {
  card: {
    border: "1px solid #ccc",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "200px",
    margin: "20px auto"
  }
};

export default PokemonCard;



