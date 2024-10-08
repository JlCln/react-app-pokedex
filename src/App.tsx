import "./App.css";

import PokemonCard from "./components/PokemonCard";

function App() {
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[0]}/>
      <p style={{ color: "#ff9500", fontWeight: "bold", textDecoration: "underline" }}>Using props</p>
      <PokemonCard pokemon={pokemonList[1]}/>
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
    name: "#0151: Mew / Mew / ミュウ",
  },
];

export default App;