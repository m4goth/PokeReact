import React, { useState } from "react";
import "./App.css";

import Button from '@mui/material/Button'
import PageBuscaPokemon from "./pages/PageBuscaPokemon/PageBuscaPokemon"
import PageListaPokemon from "./pages/PageListaPokemon/PageListaPokemon"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  const [page, setPage] = useState(1);
  let pageRender;
  if (page === 1) {
    pageRender = <PageListaPokemon />

  } else if (page === 2) {
    pageRender =
      <PageBuscaPokemon />

  }

  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Lista de Pokemons</Link>
        </li>
        <li>
          <Link to="/busca-de-pokemons">Busca de Pokemons</Link>
        </li>

      </ul>
      <div className="App" >
        {/* <img alt="" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-0.png" /> */}
        <Routes>
          <Route exact path="/" element={<PageListaPokemon />}>

          </Route>
          <Route path="/busca-de-pokemons" element={<PageBuscaPokemon />}>

          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;