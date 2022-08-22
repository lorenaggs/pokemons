import '../../styles/pokemonItem.scss';
import PokemonItemBack from "./pokemonItemBack";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {PokemonsData} from "../../domain/models";
import {getPokemons, getPokemonSelected} from "../../domain/store/slices/pokemon";
import {Type} from "../../domain/models/PokemonInformation";
import RadarChart from "./RadarChart";

// @ts-ignore
const PokemonItem = () => {
    const dispatch = useDispatch();

    const [pokemon, setPokemon] = useState({});
    let { id } = useParams();
    const {isLoading,  pokemonSelected } = useSelector( (state:any) => state.pokemons )

    useEffect(()=>{
        // @ts-ignore
        dispatch(getPokemonSelected(id))
    },[])


    return (
     <>
        <PokemonItemBack/>
         {!isLoading && <div className='cardItem'>
         <div className='detail'>
             <img className='imageItem'
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                  alt="ImagePrin"/>
             <section className='detailItem'>Detalles del pokemon
                 <h3>{pokemonSelected.name}</h3>
                 <p>Numero: #{id}</p>
                 <p>Altura: {pokemonSelected.height}</p>
                 <p>Tipo {
                    pokemonSelected?.types.map((x:Type) => (
                        <p>- {x.type.name}</p>
                    ))
                  }</p>
                 <p>Estadisticas base</p>
                 <section>
                     <RadarChart data={pokemonSelected?.stats} />
                 </section>
             </section>
         </div>
     </div>}
         </>
    )
}
export default PokemonItem;
