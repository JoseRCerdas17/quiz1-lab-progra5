import { useState, useEffect } from "react";

const useApi = (query) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      setData([]);

      try {
        if (query.trim() === "") {
          // Sin búsqueda: carga los primeros 20 pokemones
          const res = await fetch(
            "https://pokeapi.co/api/v2/pokemon?limit=20"
          );
          if (!res.ok) throw new Error("Error al cargar los pokémones");
          const json = await res.json();

          // Buscar detalle de cada pokemon para tener imagen y tipos
          const details = await Promise.all(
            json.results.map((p) => fetch(p.url).then((r) => r.json()))
          );
          setData(details);

        } else {
          // Con búsqueda: buscar pokemon por nombre exacto
          const res = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase().trim()}`
          );
          if (!res.ok) throw new Error(`No se encontró el pokémon "${query}"`);
          const json = await res.json();
          setData([json]); // Lo metemos en array para manejar igual
        }

      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]); // 🔁 Se vuelve a ejecutar cada vez que cambia la búsqueda

  return { data, loading, error };
};

export default useApi;