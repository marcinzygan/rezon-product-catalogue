import React from "react";
import { Icon } from "@iconify/react";

const SearchBar = () => {
  return (
    <form className="search__container" onSubmit={console.log("hello")}>
      <div className="searchbar__container">
        <input
          className="searchBar"
          type="text"
          value={""}
          onChange={"inputChange"}
          name="search"
          placeholder="Szukaj Produktu"
        ></input>
        <Icon icon="fa:search" className="searchIcon" onClick={"getSearch"} />
      </div>
    </form>
  );
};

export default SearchBar;
