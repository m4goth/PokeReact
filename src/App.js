import React, { useState } from "react";
import "./App.css";
import PokeDetail from './components/PokeDetail/PokeDetail'
import axios from "axios";

const App = () => {
  const [pokemon, DefinirPokemon] = useState("pikachu");
  const [pokemonDados, DefinirPokemonDados] = useState([]);
  // const [pokemonTipo, DefinirPokemonTipo] = useState("");

  const handleChange = (e) => {
    DefinirPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PeguePokemon();
  };
  const PeguePokemon = async () => {
    const toArray = [];
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
      const res = await axios.get(url);
      toArray.push(res.data);
      // DefinirPokemonTipo(res.data.types[0].type.name);
      DefinirPokemonDados(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonDados);

  return (
    <div className="App" >

      <form onSubmit={handleSubmit}>
        <label>
          <input
            className="inputche"
            type="text"
            onChange={handleChange}
            placeholder="Nome do pokemon"
          />
        </label>
      </form>
      {pokemonDados.map((data) => {
        return (
          <PokeDetail data={data} />
        );
      })}
    </div>
  );
};

export default App;
// const toArray = [];
// try {
//   const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
//   const pokeDesc = `https://pokeapi.co/api/v2/ability/${pokemon}`;

//   const resPokemon = await axios.get(url);
//   const resPokemonEtc = await axios.get(pokeDesc);

//   axios.all([resPokemon, resPokemonEtc]).then(
//     axios.spread((...allData) => {
//       console.log(allData);
//     })
//   );
//   // console.log(res);
//   toArray.push(res.data);
//   DefinirPokemonDados(toArray);
// } catch (e) {
//   console.log(e);
// }