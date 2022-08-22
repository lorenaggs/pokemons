import axios from "axios";

export const ServicePokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})
