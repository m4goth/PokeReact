import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PokeDetail from "../../components/PokeDetail/PokeDetail";

/**
 *  Proximos passos:
 *  - integrar com api de lista pokemons
 *  - mostrar pelo menos o nome na grid abaixo
 *
 *
 */

export default function PageListaPokemon() {
  return (
    <div id="lista-de-pokemons">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
              nome: "pikachu",
              tipo: "electric",
              peso: 60,
              altura: 4,
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
