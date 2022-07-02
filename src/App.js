import React, { useState } from "react";
import "./App.css";

import Button from '@mui/material/Button'
import PageBuscaPokemon from "./pages/PageBuscaPokemon/PageBuscaPokemon"
import PageListaPokemon from "./pages/PageListaPokemon/PageListaPokemon"

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
    <div className="App" >
      {/* <img alt="" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-0.png" /> */}
      <br></br>
      <Button variant="outlined" onClick={() => setPage(1)}>Lista de Pokemons</Button>
      <Button variant="outlined" onClick={() => setPage(2)}>Busca de Pokemons</Button>
      {pageRender}
    </div>
  );
};

export default App;