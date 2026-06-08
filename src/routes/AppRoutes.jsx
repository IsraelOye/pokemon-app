import { Routes, Route } from 'react-router-dom';
import PokemonListPage from '../pages/PokemonList';
import PokemonDetailsPage from '../pages/PokemonDetails';

function AppRoutes() {
    return (
      <Routes>
        <Route path="/" element={<PokemonListPage />} />
        <Route path="/pokemon/:id" element={<PokemonDetailsPage />} />
      </Routes>
    );
}

export default AppRoutes