function PokemonCard() {
    let pokemon = pokemonList[0];
    let pokemonOther = pokemonList[1];
    return (
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
        <p style={{ color: "red", fontWeight: "bold", textDecoration: "underline" }}>Other Pokemon</p>
        <figure>
        {pokemonOther.imgSrc ? (
          <img src={pokemonOther.imgSrc} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemonOther.name}</figcaption>
      </figure>
      </figure>
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

export default PokemonCard;