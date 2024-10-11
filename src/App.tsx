import "./App.css";
import { useState } from "react";
import { useEffect } from "react";

import PokemonCard from "./components/PokemonCard";

import NavBar from "./components/NavBar";



function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  useEffect(() => {
    alert("Hey, Wild Pokémon trainer! :>");
  }, []);
  
  return (
    <div className="App">
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <p style={{ color: "cyan", fontWeight: "bold", textDecoration: "underline" }}>Using map function</p>
      <NavBar pokemonIndex={pokemonIndex} setPokemonIndex={setPokemonIndex} pokemonList={pokemonList}/>
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