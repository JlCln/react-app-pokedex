import "./App.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <p style={{ color: "#eb7880", fontWeight: "bold", textDecoration: "underline" }}>Using states</p>
      <div>
        <button onClick={() => setPokemonIndex(pokemonIndex - 1)} style={{ visibility: pokemonIndex === 0 ? "hidden" : "visible" }}>Précédent</button>
        <button onClick={() => setPokemonIndex(pokemonIndex + 1)} style={{ visibility: pokemonIndex === pokemonList.length - 1 ? "hidden" : "visible" }} >Suivant</button>
      </div>
      </div>
  );
}

const pokemonList = [
  {
    name: "#0001: Bulbasaur / Bulbizarre / フシギダネ",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "#0004: Charmander / Salamèche / ヒトカゲ",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "#0007: Squirtle / Carapuce / ゼニガメ",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "#0025: Pikachu / Pikachu / ピカチュウ",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "#0151: Mew / Mew / ミュウ",
  },
];

export default App;