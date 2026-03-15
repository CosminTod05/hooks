import './App.css';
import { useFecthCharacters } from './hooks/useFecthCharacters';

function App() {
  const urlPokemon = 'https://pokeapi.co/api/v2/pokemon/1';
  const urlRick = 'https://rickandmortyapi.com/api/character/1';

  // Usamos el hook para Pokemon
  const { data: pokemon } = useFecthCharacters(urlPokemon);
  // Usamos el hook para Rick
  const { data: rick } = useFecthCharacters(urlRick);

  return (
    <>
      <h1>Custom Hooks Exercise</h1>

      {/* Personaje Pokemon */}
      {pokemon && (
        <div>
          <h2>Personaje Pokemon</h2>
          <p>{pokemon.name}</p>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
        </div>
      )}

      {/* Personaje Rick and Morty */}
      {rick && (
        <div>
          <h2>Personaje Rick and Morty</h2>
          <p>{rick.name}</p>
          <img src={rick.image} alt={rick.name} />
        </div>
      )}
    </>
  );
}

export default App;
