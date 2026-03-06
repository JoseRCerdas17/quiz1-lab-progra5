function Busqueda({ nombre, setNombre, buscarPokemon }) {

  return (
    <div style={estilos.container}>

      <input
        type="text"
        placeholder="Buscar Pokémon..."
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        style={estilos.input}
      />

      <button onClick={buscarPokemon} style={estilos.boton}>
        Buscar
      </button>

    </div>
  );
}

const estilos = {
  container: {
    margin: "20px",
    textAlign: "center"
  },

  input: {
    padding: "10px",
    marginRight: "10px"
  },

  boton: {
    padding: "10px"
  }
};

export default Busqueda;