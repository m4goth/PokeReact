import React, { useState } from "react";
import PokeDetail from "../../components/PokeDetail/PokeDetail";
import axios from "axios";
export default function PageBuscaPokemon() {
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
  return (
    <div id="busca-pokemons">
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
        return <PokeDetail data={data} />;
      })}
    </div>
  );
}
