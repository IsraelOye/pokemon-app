import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
    const image = pokemon.sprites.other['official-artwork'].front_default;

    return (
      <div className="">
        <span className="text-lg font-medium">
          {String(pokemon.id).padStart(2, "0")}
        </span>
        <p className="capitalize font-medium text-lg leading-3">
          {pokemon.name}
        </p>
        <div className="mb-3">
          <Link to={`/pokemon/${pokemon.id}`} className="inline-block mb-10">
            <img
              src={image}
              alt={pokemon.name}
              className="transition-transform duration-300 ease-in-out hover:scale-105"
            />
          </Link>
        </div>
      </div>
    );
}

export default PokemonCard;