import {
    setFightingPokemons,
    setFilterPokemon,
    setPokemons,
    setPokemonSelected,
    starLoadingPokemons
} from "./pokemonSlice";
import {ServicePokemon} from "../../../service/service-pokemon";
import {PokemonListResponse, PokemonsData} from "../../../models";
import {PokemonInformation} from "../../../models/PokemonInformation";

export const getPokemons = () =>{

    return async ( dispatch: any, getState: any )=> {
        dispatch(starLoadingPokemons());
        const {data} = await ServicePokemon.get<PokemonListResponse>('pokemon?limit=151')
        dispatch(setPokemons( { pokemons: data.results}));
    }
}

export const SetFightingPokemons = (pokemon: PokemonsData[]) =>{

    return async ( dispatch: any, getState: any )=> {
        dispatch(starLoadingPokemons());
        dispatch(setFightingPokemons( { fightingPokemons: pokemon}));
    }
}


export const SetFilterPokemon= (pokemon: string) =>{

    return async ( dispatch: any, getState: any )=> {
        dispatch(starLoadingPokemons());
        dispatch(setFilterPokemon( {pokemon}));
    }
}

export const getPokemonSelected = (id: string) =>{

    return async ( dispatch: any, getState: any )=> {
        dispatch(starLoadingPokemons());
        const {data} = await ServicePokemon.get<PokemonInformation>(`pokemon/${id}`)
        dispatch(setPokemonSelected( { pokemon: data}));
    }
}
