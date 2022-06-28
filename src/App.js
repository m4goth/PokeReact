import React, { useState } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [pokemon, DefinirPokemon] = useState("pikachu");
  const [pokemonDados, DefinirPokemonDados] = useState([]);
  const [pokemonTipo, DefinirPokemonTipo] = useState("");

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
      DefinirPokemonTipo(res.data.types[0].type.name);
      DefinirPokemonDados(toArray);
    } catch (e) {
      console.log(e);
    }
  };
  console.log(pokemonDados);

  return (
    <div className="App">
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
      {/* <ul>{pokemonDados}</ul> */}
      {/* <p>{[pokemonDados]}</p> */}
      {pokemonDados.map((data) => {
        return (
          <div className="container">

            <img src={data.sprites["front_default"]} />

            <div className="divMesa">
              <div className="divMesaBody">

                <div className="divMesaRow">
                  <div className="divMesaCell">Tipo</div>
                  <div className="divMesaCell">{pokemonTipo}</div>
                </div>

                <div className="divMesaRow">
                  <div className="divMesaCell">Altura</div>
                  <div className="divMesaCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>

                <div className="divMesaRow">
                  <div className="divMesaCell">Peso</div>
                  <div className="divMesaCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>

                <div className="divMesaRow">
                  <div className="divMesaCell">N/ de batalhas</div>
                  <div className="divMesaCell">{data.game_indices.length}</div>
                </div>

              </div>
            </div>
          </div>
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