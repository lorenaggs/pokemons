import React, {useEffect} from 'react';
import '../../App.scss';
import {useDispatch, useSelector} from "react-redux";
import PokemonCard from "./PokemonCard";
import Finder from "./finder";
import {getPokemons} from "../../domain/store/slices/pokemon";
import FightingPokemons from "./FightingPokemons";
import AppRouter from "../router/AppRouter";
function App() {

    const dispatch = useDispatch();

    const {isLoading, pokemons,  fightingPokemons } = useSelector( (state:any) => state.pokemons )


    useEffect(()=>{
        // @ts-ignore
        dispatch(getPokemons())
    },[])


    return (
        <div className="container">
            <div className='container_listPokemon'>
                <Finder/>
                {!isLoading && <PokemonCard dataPokemons={ pokemons} fightingPokemons={fightingPokemons}/>}
            </div>
            <FightingPokemons pokemonsReady={fightingPokemons}/>
        </div>
    );
}

export default App;
