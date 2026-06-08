// const BASE_URL = 'https://pokeapi.co/api/v2';

// export const getPokemonList = async () => {
//     const response = await fetch(`${BASE_URL}/pokemon?limit=20`)

//     if (!response.ok) {
//         throw new Error("Failed to fetch Pokemon list")
//     }

//     const data = await response.json();
//     return data;
// };

// export const getPokemonDetails = async (idOrName) => {
//     const response = await fetch(`${BASE_URL}/pokemon/${idOrName}`)

//     if (!response.ok) {
//         throw new Error(`Failed to fetch details for ${idOrName}`)
//     }

//     const data = await response.json();
//     return data;
// };

const BASE_URL = 'https://pokeapi.co/api/v2';

// The generic API template
export const apiCall = async (route, options = {}) => {
    const response = await fetch(`${BASE_URL}${route}`, options);

    if (!response.ok) {
        throw new Error(`Failed to fetch data from route: ${route} (Status: ${response.status})`);
    }

    return await response.json();
};

// Refactored functions using the api template.
export const getPokemonList = () => {
    return apiCall('/pokemon?limit=20');
};

export const getPokemonDetails = (idOrName) => {
    return apiCall(`/pokemon/${idOrName}`);
};