import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import PokeDetail from "../../components/PokeDetail/PokeDetail";
import axios from 'axios';
/**
 *  Proximos passos:
 *  - integrar com api de lista pokemons
 *  - mostrar pelo menos o nome na grid abaixo
 *
 *
 */
const lista = axios.create({
            baseURL: 'https://pokeapi.co/api/v2/pokemon/',
          });

export default function PageListaPokemon() {
  return (
    <div id="lista-de-pokemons">
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
              nome: "bulbasaur", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
              nome: "ivysaur", 
            }}
          /> 
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
              nome: "venusaur", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
              nome: "charmander", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
              nome: "charmeleon", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
              nome: "charizard", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
              nome: "squirtle", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
              nome: "wartortle", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
              nome: "blastoise", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
              nome: "caterpie", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
              nome: "metapod", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
              nome: "butterfree", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
              nome: "weedle", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
              nome: "kakuna", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
              nome: "beedrill", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
              nome: "pidgey", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
              nome: "pidgeotto", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
              nome: "pidgeot", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
              nome: "rattata", 
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <PokeDetail
            data={{
              imagem:
                "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
              nome: "raticate", 
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}