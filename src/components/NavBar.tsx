interface NavBarProps {
    pokemonIndex: number;
    setPokemonIndex: (index: number) => void;
    pokemonList: Pokemon[];
  }

  interface Pokemon {
    name: string;
    imgSrc?: string;
  }

  
  function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {


    return (
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => {
            setPokemonIndex(index);
            if (pokemon.name.toLowerCase().includes("pikachu")) {
              alert("Pika-pii~!! ⚡");
            }
          }}>
            {pokemon.name}
          </button>
        ))}
      </div>
    );
  }

  

export default NavBar;