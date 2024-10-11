import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { selectFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.search}
        type="text"
        onChange={(event) => dispatch(selectFilter(event.target.value))}
        placeholder="Enter a name for your search!"
      />
    </div>
  );
};

export default SearchBox;
