import { Link } from "react-router-dom";

function PokemonCard({ pokemon }) {
  const image = pokemon.sprites.other["official-artwork"].front_default;

  return (
    <div className="text-white bg-blue-500 rounded-xl p-3 flex flex-col items-center">
      <span className="text-sm md:text-lg font-medium self-start">
        #{String(pokemon.id).padStart(2, "0")}
      </span>
      <p className="capitalize font-medium text-sm md:text-lg self-start">
        {pokemon.name}
      </p>
      <Link to={`/pokemon/${pokemon.id}`} className="inline-block mt-2">
        <img
          src={image}
          alt={pokemon.name}
          className="w-20 h-20 md:w-28 md:h-28 object-contain transition-transform duration-300 ease-in-out hover:scale-105"
        />
      </Link>
    </div>
  );
}

export default PokemonCard;