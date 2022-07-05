import React, { useState } from "react";
import "./App.css";

import Home from "./components/Home/Home"

const App = () => {

  return (
    <Home />
    // <Router>
    //   <ul>
    //     <li>
    //       <Link to="/busca-de-pokemons">Busca de Pokemons</Link>
    //     </li>
    //     <li>
    //       <Link to="/">Lista de Pokemons</Link>
    //     </li>

    //   </ul>
    //   <div className="App" >
    //     {/* <img alt="" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-0.png" /> */}
    //     <Routes>
    //       <Route path="/busca-de-pokemons" element={<PageBuscaPokemon />}>

    //       </Route>
    //       <Route exact path="/" element={<PageListaPokemon />}>

    //       </Route>
    //     </Routes>
    //   </div>
    // </Router>
  );
};

export default App;