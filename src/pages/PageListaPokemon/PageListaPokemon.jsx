import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import PokeDetail from "../../components/PokeDetail/PokeDetail";
import PokeAPI from "../../utils/PokeApi";

export default function PageListaPokemon() {
  const [listaPokemon, setListaPokemon] = useState([]);

  let pokeApi = new PokeAPI();
  useEffect(() => {
    const fetchLista = async () => {
      let res = await pokeApi.listaPokemon();
      setListaPokemon(res.data.results);
    };
    fetchLista();
  }, []);
  return (
    <div id="lista-de-pokemons">
      <Grid container spacing={2}>
        {listaPokemon.map((poke) => (
          <Grid item xs={4}>
            <PokeDetail
              data={{
                nome: poke.name,
                url: poke.url,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
