import React, {useEffect, useState} from "react";
import {PokemonsData} from "../../domain/models";
import {SetFightingPokemons, updatePokemons} from "../../domain/store/slices/pokemon";
import {useDispatch} from "react-redux";
import {NavLink} from "react-router-dom";
enum ImagesType {
    DREAMWORLD,
    OFFICIALARTWORK
}
enum IconType {
    add='fa-plus',
    trash = 'fa-trash-can'
}
interface Props {
    dataPokemons: PokemonsData[]
    fightingPokemons?: PokemonsData[]
    filterPokemon?: string
    imageType?: ImagesType
    imageIcon?: IconType
}

const PokemonCard = ( {dataPokemons, fightingPokemons, filterPokemon}:Props )=>{

    const [pokemons, setPokemons] = useState<PokemonsData[]>([]);
    const dispatch = useDispatch();

    useEffect(() => {
        const updateData  = dataPokemons.filter( (pokemon:PokemonsData)=> pokemon.id !== -1)
        setPokemons(updateData);
    }, [dataPokemons]);

    useEffect(() => {
        const filterData = dataPokemons.filter( (pokemon)=>
            pokemon.name.toUpperCase().includes(filterPokemon?.toUpperCase() || '') &&  pokemon.icon === IconType.add )
        setPokemons(filterData);
    }, [filterPokemon]);

    const handlerFightingPokemon = (pokemonAction: PokemonsData)=>{
         if( pokemonAction.icon === IconType.add){
            addFightinhPokemon(pokemonAction);
        }
        if( pokemonAction.icon === IconType.trash){
            removeFightinhPokemon(pokemonAction);
        }
    }

    const addFightinhPokemon = (pokemonAction: PokemonsData)=>{
        if( fightingPokemons === undefined){
            return
        }
        if(fightingPokemons?.length <= 6){
            // @ts-ignore
            dispatch(SetFightingPokemons([...fightingPokemons, pokemonAction]))
        }
    }

    const removeFightinhPokemon = (pokemonAction: PokemonsData)=>{
        const newFigthers = dataPokemons.filter( (pokemon:PokemonsData)=> pokemon.id !== pokemonAction.id)
        // @ts-ignore
        dispatch(SetFightingPokemons([...newFigthers]))
    }

    return (
        <div className='card'>
            {pokemons.length === 0 && <h4>Lista vacía, no hay ningun pokemon listo</h4>}
            {
                pokemons.map( (pokemon: PokemonsData)=>(
                    <li className='card_list' key={pokemon.id}>
                        <div >
                            { pokemon.showIcon
                                ? (<i className={`fa-solid ${pokemon.icon}`}  onClick={()=>handlerFightingPokemon(pokemon)}></i>)
                            : (<i className={`fa-solid fa-check-double`}  ></i>)}
                            <NavLink to={`/pokemon/${pokemon.id}`}>
                                <div className='card_information'>
                                    <img className='image' src={pokemon.image} alt="ImagePrin" />
                                    <p className='namePokemon'>{pokemon.name}</p>
                                </div>
                            </NavLink>
                        </div>
                    </li>
                ))
            }
        </div>
    )
}
export default PokemonCard;
