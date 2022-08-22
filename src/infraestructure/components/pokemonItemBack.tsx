import '../../styles/pokemonItemBack.scss';
import {NavLink} from "react-router-dom";

const PokemonItemBack = () => {


    return (
        <div className='backAdd' >
            <div className="iconsItem">
                <NavLink to="/">
                    <i className="fa-solid fa-arrow-left"></i>
                Volver
                </NavLink>
            </div>
            <button className='btnAdd'>Agregar a lista</button>
        </div>
    )
}
export default PokemonItemBack;

