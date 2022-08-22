import React, {useEffect} from "react";
import PokemonCard from "./PokemonCard";

const FightingPokemons = ({pokemonsReady}: any)=> {

    useEffect(() => {
      console.log(pokemonsReady)
    }, [pokemonsReady]);

    return (
        <div className='container_favorites'>
            <div>
                <section className='list'>Listos para el combate</section>
            </div>
            {<PokemonCard dataPokemons={ pokemonsReady}/>}
        </div>
    )
}

export default FightingPokemons;
