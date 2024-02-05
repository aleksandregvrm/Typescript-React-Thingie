import { useState,ChangeEvent } from "react";
import { useReduxSelector as useSelector, reduxDispatch } from "../store";
import { searchItem,getAllProducts } from "../features/products/productsSlice";
import data from "../data/data";

type InitialStateType = {text:string}

const Search = () => {
  const [productValues, setProductValues] = useState<InitialStateType>({ text: "" });
  const {} = useSelector((store) => store.products);
  const dispatch = reduxDispatch();

  // let debounceTimer;
  // const debounce = (func, delay) => {
  //   clearTimeout(debounceTimer);
  //   debounceTimer = setTimeout(func, delay);
  // };

  const clickHandler = () => {
    // clearTimeout(debounceTimer);
    dispatch(searchItem(productValues.text));
  };
  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProductValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const clearItems = () => {
    dispatch(getAllProducts(data))
  }
  return (
    <div className="search-bar">
      <input
        type="text"
        onChange={handleSearchChange}
        name="text"
        placeholder={`search...`}
        value={productValues.text}
      />
      <button onClick={clickHandler} type="button">
        Search
      </button>
      <button onClick={clearItems} type="button">
        Clear Search
      </button>
    </div>
  );
};
export default Search;
