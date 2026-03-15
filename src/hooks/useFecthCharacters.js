import { useState, useEffect } from "react";

// Hook para traer personajes de una API
export const useFecthCharacters = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((resultado) => {
        setData(resultado);
      });
  }, [url]);

  return { data };
};
