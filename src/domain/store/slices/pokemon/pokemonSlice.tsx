import {createSlice} from "@reduxjs/toolkit";
import {PokemonsData} from "../../../models";

const pokemonDefault = {
    name:   'default',
    url:    '',
    id:     -1,
    image:  '',
    icon: '',
    showIcon: false
}
const skeletonPokemon : PokemonsData[] = [pokemonDefault]

const initialState  = {
    pokemons: skeletonPokemon,
    fightingPokemons: skeletonPokemon,
    isLoading: false,
    namePokemon: '',
    pokemonSelected: {}
}

export const pokemonSlice = createSlice({
    name: 'pokemons',
    initialState,
    reducers: {
        starLoadingPokemons: (state)=>{
            state.isLoading= true;
        },
        setPokemons: (state, action)=>{
          state.isLoading = false;
          state.pokemons = action.payload.pokemons
        },
        setFightingPokemons: (state, action)=>{
            state.isLoading = false;
            state.fightingPokemons = action.payload.fightingPokemons
        },
        setFilterPokemon: (state, action)=>{
        state.isLoading = false;
        state.namePokemon = action.payload.pokemon
        },
        setPokemonSelected: (state, action)=>{
            state.isLoading = false;
            state.pokemonSelected = action.payload.pokemon
        }
    }
});

export const {
    starLoadingPokemons,
    setPokemons,
    setFightingPokemons,
    setFilterPokemon,
    setPokemonSelected
} = pokemonSlice.actions
