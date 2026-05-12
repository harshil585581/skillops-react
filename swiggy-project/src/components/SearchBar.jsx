import React from "react";
import { useDispatch } from "react-redux";
import { filterRestaurants } from "../redux/restaurantSlice";
import { debounce } from "../utils/debounce";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = debounce((text) => {
    dispatch(filterRestaurants(text));
  }, 500);

  return (
    <div className="search-container">
      <input
        type="text"
        className="search-bar"
        placeholder="Search for restaurants and food"
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;