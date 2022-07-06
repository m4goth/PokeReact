import React, { useState } from "react";
import PokeDetail from "../../components/PokeDetail/PokeDetail";
import PokeAPI from "../../utils/PokeApi";

export default function PageBuscaPokemon() {
  const [pokemon, DefinirPokemon] = useState("pikachu");

  const [pokemonDados, DefinirPokemonDados] = useState({});
  // const [pokemonTipo, DefinirPokemonTipo] = useState("");

  const handleChange = (e) => {
    DefinirPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    PeguePokemon();
  };
  const PeguePokemon = async () => {
    try {
      let pokeApi = new PokeAPI();
      let response = await pokeApi.buscaPokemon(pokemon);
      console.log(response);
      DefinirPokemonDados(response.data);
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
      {pokemonDados.name && (
        <PokeDetail
          data={{
            imagem: pokemonDados.sprites["front_default"],
            nome: pokemonDados.name,
            tipo: pokemonDados.types[0].type.name,
            peso: pokemonDados.weight,
            altura: pokemonDados.height,
          }}
        />
      )}
    </div>
  );
}
