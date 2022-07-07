import axios from "axios";

class PokeAPI {

    constructor() {
        this.api = axios.create({ baseURL: 'https://pokeapi.co/api/v2/', })
    }

    listaPokemon(offset=0) {
        //acessa api
        //retorna lista
        return this.api.get(`/pokemon?offset=${offset}`)
    }

    buscaPokemon(nomeDoPokemon) {
        //acessar api
        //trazer dados do pokemon
        return this.api.get(`/pokemon/${nomeDoPokemon}`)
    }
}
export default PokeAPI