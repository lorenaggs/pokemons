import React, {useEffect} from 'react';
import '../../App.scss';
import {useDispatch, useSelector} from "react-redux";
import PokemonCard from "./PokemonCard";
import Finder from "./finder";
import {getPokemons} from "../../domain/store/slices/pokemon";
import FightingPokemons from "./FightingPokemons";
import AppRouter from "../router/AppRouter";
import {PokemonsData} from "../../domain/models";
import {HandlerDataPokemon} from "../../domain/service/service-pokemon";

function App() {
    const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/CODEIMAGE.png'
    const dispatch = useDispatch();

    const {isLoading, pokemons,  fightingPokemons, namePokemon } = useSelector( (state:any) => state.pokemons )


    useEffect(()=>{
        // @ts-ignore
        dispatch(getPokemons())
    },[])


    return (
        <div className="container">
            <div className='container_listPokemon'>
                <Finder/>
                {!isLoading && <PokemonCard dataPokemons={ HandlerDataPokemon(pokemons,urlImage)} fightingPokemons={fightingPokemons} filterPokemon={namePokemon}/>}
            </div>
            <FightingPokemons pokemonsReady={ HandlerDataPokemon(fightingPokemons, urlImage)}/>
        </div>
    );
}

export default App;
