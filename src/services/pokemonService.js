const BASE_URL = 'https://pokeapi.co/api/v2';

export const getPokemonList = async () => {
    const response = await fetch(`${BASE_URL}/pokemon?limit=20`)

    if (!response.ok) {
        throw new Error("Failed to fetch Pokemon list")
    }

    const data = await response.json();
    return data;
};

export const getPokemonDetails = async (idOrName) => {
    const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`)

    if (!response.ok) {
        throw new Error(`Failed to fetch details for ${idOrName}`)
    }

    const data = await response.json();
    return data;
};