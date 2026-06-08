import React from 'react'
import { useEffect, useState  } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getPokemonDetails } from '../services/pokemonService';
import { FaArrowLeft } from "react-icons/fa6";

const PokemonDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        setLoading(true);
        const data = await getPokemonDetails(id);
        setPokemon(data);
      } catch (err) {
        setError("Pokémon not found or failed to load.");
      } finally {
        setLoading(false);
      }
    };

    fetchDetail();
  }, [id]);

  if (loading) return <div className="loader">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  const image = pokemon.sprites.other["official-artwork"].front_default;

  return (
    <div className="detail-page">
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-1 cursor-pointer"
      >
        <FaArrowLeft />
        <p className="font-medium">Back to List</p>
      </button>

      <h1 className="capitalize text-4xl mt-5">{pokemon.name}</h1>
      <img src={image} alt={pokemon.name} />

      <div>
        <p className='text-gray-800 font-bold'>Height:<span className='text-sm text-black font-normal'> {pokemon.height / 10} m</span></p>
        <p className='text-gray-800 font-bold'>Weight:<span className='text-sm text-black font-normal'> {pokemon.height / 10} kg</span></p>

        <div className="mt-3">
          <p className="text-gray-800 font-bold">Types:</p>
          <ul className="capitalize text-sm">
            {pokemon.types.map((t) => (
              <li key={t.type.name}>{t.type.name}</li>
            ))}
          </ul>
        </div>

        <div className="mt-3">
          <p className="text-gray-800 font-bold">Abilities:</p>
          <ul className="capitalize text-sm">
            {pokemon.abilities.map((a) => (
              <li key={a.ability.name}>{a.ability.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PokemonDetailsPage;