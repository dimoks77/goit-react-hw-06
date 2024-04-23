import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setSearchFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const searchFilter = useSelector(state => state.filters.searchFilter); 

  const handleChange = (value) => {
    dispatch(setSearchFilter(value));
  };

  return (
    <div className={css.search}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={searchFilter}
        onChange={(evt) => handleChange(evt.target.value)} 
      />
    </div>
  );
};

export default SearchBox;
