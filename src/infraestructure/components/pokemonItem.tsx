import '../../styles/pokemonItem.scss';
import PokemonItemBack from "./pokemonItemBack";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import { getPokemonSelected} from "../../domain/store/slices/pokemon";
import {Type} from "../../domain/models/PokemonInformation";
import RadarChart from "./RadarChart";
import FightingPokemons from "./FightingPokemons";
import {HandlerDataPokemon} from "../../domain/service/service-pokemon";

// @ts-ignore
const PokemonItem = () => {
    const dispatch = useDispatch();
    const urlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/CODEIMAGE.png'

    let { id } = useParams();
    const {isLoading,  pokemonSelected, fightingPokemons } = useSelector( (state:any) => state.pokemons )

    useEffect(()=>{
        // @ts-ignore
        dispatch(getPokemonSelected(id))
    },[])


    const printCard = ()=>{
        return (
            <div className='cardItem'>
                <div className='detail'>
                    <img className='imageItem'
                         src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                         alt="ImagePrin"/>
                    <section className='detailItem'>
                       <h2 className='detailPokemon'>Detalles del pokemon</h2> 
                        <h3 className='detailName'>NOMBRE: {pokemonSelected.name}</h3>
                        <p>Numero: #{id}</p>
                        <p>Altura: {pokemonSelected.height}</p>
                        <p>Tipo {
                            pokemonSelected.types && pokemonSelected.types.map((x:Type) => (
                                <p className='type'>{x.type.name}</p>
                            ))
                        }</p>
                        
                    </section>
                    
                </div>
                <section>
                    <p>Estadisticas base</p>
                        <section className='pokemonStats'>
                            {pokemonSelected.stats && <RadarChart data={pokemonSelected.stats}/>}
                        </section>
                    </section>
            </div>
        );
    }
    return (
       <>
           <PokemonItemBack/>
           <div className="container">
               {!isLoading && printCard()}
               <FightingPokemons pokemonsReady={ HandlerDataPokemon(fightingPokemons, urlImage)}/>
           </div>
       </>

    )
}
export default PokemonItem;
