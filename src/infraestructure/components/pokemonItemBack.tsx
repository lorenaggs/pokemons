import '../../styles/pokemonItemBack.scss';
import { NavLink, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { PokemonsData } from '../../domain/models';
import { SetFightingPokemons } from "../../domain/store/slices/pokemon";

enum IconType {
    add = 'fa-plus',
    trash = 'fa-trash-can'
}

const PokemonItemBack = () => {

    const [labelBtn, setLblBtn] = useState('Borrar de la lista')
    const dispatch = useDispatch();

    const { fightingPokemons, pokemonSelected } = useSelector((state: any) => state.pokemons)
    let { id } = useParams();

    const updateTokens = fightingPokemons.map((pokemon: PokemonsData) => {
        if (pokemon.id === fightingPokemons.id) {
            return {
                ...pokemon,
                showIcon: false
            }
        }
        return pokemon
    })

    const handlerFightingPokemon = () => {

        if (labelBtn === 'Borrar de la lista') {
            const newFigthers = fightingPokemons.filter((pokemon: PokemonsData) => pokemon.id !== Number(id))
            // @ts-ignore
            dispatch(SetFightingPokemons([...newFigthers]))
        } else {
            const pokemonAction = {
                name: pokemonSelected.name,
                url: `https://pokeapi.co/api/v2/pokemon/${id}`,
                id,
                image: pokemonSelected.sprites.other.dream_world.front_default,
                icon: pokemonSelected.id ? IconType.trash : IconType.add,
                showIcon: true
            }
            if (fightingPokemons.length <= 6) {
                // @ts-ignore
                dispatch(SetFightingPokemons([...fightingPokemons, pokemonAction], updateTokens))
                setLblBtn('Borrar de la lista')
            }
        }
    }

    useEffect(() => {
        // @ts-ignore
        const btnAdd = fightingPokemons.findIndex(pokemon => pokemon.id === Number(id))
        if (btnAdd === -1) {
            setLblBtn('Agregar a la lista')
        }
    }, [])


    return (
        <div className='backAdd' >
            <div className="iconsItem">
                <NavLink to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                    Volver
                </NavLink>
            </div>
            <button className='btnAdd' onClick={() => handlerFightingPokemon()}>{labelBtn}</button>
        </div>
    )
}
export default PokemonItemBack;

