import React from "react";
import classes from "./searchBar.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchInput,
  clearInput,
  filterSearch,
} from "@/state/productSearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  //  Get state for searchInput
  const searchInput = useSelector((state) => state.search.searchInput);
  // Get state for all Products
  const productCards = useSelector((state) => state.data.productCards);
  // FUNCTION TO SEARCH
  const getSearch = function (event) {
    event.preventDefault();
    const { name, value } = event.target;

    dispatch(setSearchInput({ name, value }));
    console.log(searchInput.search, "getting search");
    dispatch(filterSearch(productCards));
    console.log(searchInput.search);
    dispatch(clearInput());
    window.scrollTo(0, 0);
    event.target[0].blur();
  };

  //   Function to handle input change that is getting event
  const inputChange = function (event) {
    // get name and value and pass it to setSearch as object
    const { name, value } = event.target;
    dispatch(setSearchInput({ name, value }));
  };

  return (
    <form className={classes.search__container} onSubmit={getSearch}>
      <div className={classes.searchbar__container}>
        <input
          className={classes.searchBar}
          type="text"
          value={searchInput.search}
          onChange={inputChange}
          name="search"
          placeholder="Szukaj Produktu"
        ></input>
        <Icon
          className={classes.searchIcon}
          onClick={getSearch}
          icon="ph:magnifying-glass"
        />
        {/* <Icon
          icon="fa:search"
         
        /> */}
      </div>
    </form>
  );
};

export default SearchBar;
