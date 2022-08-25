import "../../styles/finder.scss";
import { SetFilterPokemon } from "../../domain/store/slices/pokemon";
import { useDispatch } from "react-redux";

const Finder = () => {
  const dispatch = useDispatch();

  const handlerFilter = (ev: any) => {
    ev.preventDefault();
    // @ts-ignore
    dispatch(SetFilterPokemon(ev.target.value));
  };
  return (
    <input
      className="search"
      type="text"
      placeholder="Que pokemon buscas..."
      onChange={handlerFilter}
    />
  );
};

export default Finder;
