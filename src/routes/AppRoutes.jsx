import { Routes, Route } from 'react-router-dom';
import PokemonListPage from '../pages/pokemonList';
import PokemonDetailsPage from '../pages/pokemonDetails';

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    );
}

export default AppRoutes