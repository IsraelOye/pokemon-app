import React from 'react';
import { useEffect, useState } from 'react';
import { getPokemonList, getPokemonDetails } from '../services/pokemonService';
import PokemonCard from '../components/pokemonCard';

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
                    data.results.map((pokemon) => getPokemonDetails(pokemon.name))
                );

                setPokemonList(detailedList);
            } catch (error) {
                setError('Failed to load pokemon. Please try again.')
            } finally {
                setLoading(false);
            }
        };
        fetchPokemon();
    }, []);

    if (loading) return <p>Loading Pokemon...</p>
    if (error) return <p>{error}</p>
  return (
    <div>
        <h1 className='text-4xl text-blue-600 font-bold uppercase text-center mb-15'>Pokemon Explorer</h1>
        <div className=''>
            {pokemonList.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </div>
    </div>
  )
}

export default PokemonListPage;