function PokemonCard({ pokemon }) {
    interface pokemon {
        name: string;
        imgSrc: string;
      }
    return (
      <figure>
        {pokemon.imgSrc ? (
          <img src={pokemon.imgSrc} />
        ) : (
          <p>???</p>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    );
    
  }




export default PokemonCard;