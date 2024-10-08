interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  interface Pokemon {
    name: string;
    imgSrc?: string;
  }

  
  function NavBar({ pokemonIndex, setPokemonIndex, pokemonList }: NavBarProps) {
    const pokemon = pokemonList[pokemonIndex];
    if (!pokemon) return null;
    return (
      <div className="NavBar">
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => setPokemonIndex(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }

  

export default NavBar;