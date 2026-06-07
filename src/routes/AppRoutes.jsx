import { Routes, Route } from 'react-router-dom';
import PokemonListPage from '../pages/pokemonlist';
import PokemonDetailsPage from '../pages/pokemondetails';

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    );
}

export default AppRoutes