import React from "react";
import { useEffect, useState } from "react";
import { getPokemonList, getPokemonDetails } from "../services/pokemonService";
import PokemonCard from "../components/pokemonCard";

const PokemonListPage = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        setLoading(true);
        const data = await getPokemonList(20);
        const detailedList = await Promise.all(
          data.results.map((pokemon) => getPokemonDetails(pokemon.name)),
        );
        setPokemonList(detailedList);
      } catch (error) {
        setError("Failed to load pokemon. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  if (loading)
    return (
      <div className="min-h-screen pt-2 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-700 mx-auto mb-4"></div>
          <p className="text-blue-700 text-lg font-medium">
            Loading Pokemon...
          </p>
        </div>
      </div>
    );
  if (error)
    return (
      <p className="text-red-600 font-medium text-center mt-10">{error}</p>
    );

  return (
    <div className="py-6 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-4xl text-blue-600 font-bold uppercase text-center mb-8">
        Pokemon Explorer
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-7">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonListPage;