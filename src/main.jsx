import React from 'react';
import ReactDOM from  'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import Name from './App.jsx'
import PokemonList from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <PokemonList />
  </BrowserRouter>
)