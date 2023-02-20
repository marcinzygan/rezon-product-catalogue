import React from "react";
import classes from "./searchBar.module.css";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchInput, clearInput } from "@/state/productSearchSlice";

const SearchBar = () => {
  const dispatch = useDispatch();
  //  Get state for searchInput
  const searchInput = useSelector((state) => state.search.searchInput);

  const getSearch = function (event) {
    event.preventDefault();

    console.log(searchInput, "getting search");
    dispatch(clearInput());
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
          icon="fa:search"
          className={classes.searchIcon}
          onClick={getSearch}
        />
      </div>
    </form>
  );
};

export default SearchBar;
