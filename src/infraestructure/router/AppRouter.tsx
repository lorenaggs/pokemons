import {Route, Routes} from "react-router-dom";
import PokemonItem from "../components/pokemonItem";
import Home from "../components/Home";

const AppRouter = ()=>{

    return (
        <>
            <Routes>
                <Route path="/"  element={<Home />}/>
                <Route path="pokemon/:id"  element={<PokemonItem/>}/>
            </Routes>
        </>
    )
}


export default AppRouter;
