function Busqueda({ nombre, setNombre, buscarPokemon }) {

  return (
    <div style={estilos.container}>

      <input
        type="text"
        placeholder="🔎 Buscar Pokémon..."
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
    margin: "30px auto",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px"
  },

  input: {
    padding: "12px 15px",
    width: "220px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "16px",
    outline: "none",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },

  boton: {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "none",
    background: "linear-gradient(135deg, #ff512f, #dd2476)",
    color: "white",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
    boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
  }

};

export default Busqueda;