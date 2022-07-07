import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import PokeDetail from "../../components/PokeDetail/PokeDetail";
import PokeAPI from "../../utils/PokeApi";
import Pagination from "@mui/material/Pagination";

export default function PageListaPokemon() {
  const [listaPokemon, setListaPokemon] = useState([]);

  let pokeApi = new PokeAPI();

  const fetchLista = async (offset = 0) => {
    let res = await pokeApi.listaPokemon(offset);
    setListaPokemon(res.data.results);
  };

  useEffect(() => {
    fetchLista();
  }, []);

  let numeroDePaginas = Math.ceil(1154 / 20);
  
  const handleChange = (event, value) => {
    console.log(value);
    //calculamos o offset
    //que vai de 0 e depois vai de 20 eem 20
    fetchLista((value - 1) * 20);
  };

  return (
    <div id="lista-de-pokemons">
    
      <Pagination count={numeroDePaginas} onChange={handleChange} />
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
