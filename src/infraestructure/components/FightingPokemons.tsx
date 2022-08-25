import PokemonCard from "./PokemonCard";

const FightingPokemons = ({ pokemonsReady }: any) => {
  return (
    <div className="container_favorites">
      <section className="list">Listos para el combate</section>
      {<PokemonCard dataPokemons={pokemonsReady} />}
    </div>
  );
};

export default FightingPokemons;
