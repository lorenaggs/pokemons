import React, {useEffect} from 'react';
import '../../App.scss';
import {useDispatch, useSelector} from "react-redux";
import PokemonCard from "./PokemonCard";
import Finder from "./finder";
import {getPokemons} from "../../domain/store/slices/pokemon";
import FightingPokemons from "./FightingPokemons";
import AppRouter from "../router/AppRouter";
import {PokemonsData} from "../../domain/models";
enum IconType {
    add='fa-plus',
    trash = 'fa-trash-can'
}
function App() {
    const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/CODEIMAGE.png'
    const dispatch = useDispatch();

    const {isLoading, pokemons,  fightingPokemons, namePokemon } = useSelector( (state:any) => state.pokemons )


    useEffect(()=>{
        // @ts-ignore
        dispatch(getPokemons())
    },[])


    const handlerPokemonsData = (pokemons: PokemonsData[])=> {
        debugger
        const updateData:PokemonsData[]  =  pokemons
            .map((pokemon:PokemonsData, index: number)=> (
                {
                    ...pokemon,
                    id: pokemon.id || index+1,
                    icon: pokemon.id? IconType.trash: IconType.add ,
                    showIcon: true,
                    image: urlImage.replace('CODEIMAGE', `${ pokemon.id || index+1}` )
                }
            ))

        return updateData
    }

    return (
        <div className="container">
            <div className='container_listPokemon'>
                <Finder/>
                {!isLoading && <PokemonCard dataPokemons={ handlerPokemonsData(pokemons)} fightingPokemons={fightingPokemons} filterPokemon={namePokemon}/>}
            </div>
            <FightingPokemons pokemonsReady={fightingPokemons}/>
        </div>
    );
}

export default App;
