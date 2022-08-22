import axios from "axios";
import {PokemonsData} from "../models";
enum IconType {
    add='fa-plus',
    trash = 'fa-trash-can'
}
export const ServicePokemon = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})

export const HandlerDataPokemon = (pokemons: PokemonsData[], urlImage: string) => {
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
