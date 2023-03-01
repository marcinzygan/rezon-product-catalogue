import React from "react";
import classes from "./searchNavigation.module.css";
import { Icon } from "@iconify/react";
import SearchBar from "../SearchBar/SearchBar";
import FilterMenu from "../filterMenu/FilterMenu";
import { useSelector } from "react-redux";
const SearchNavigation = () => {
  // FavoriteProducts STATE
  const favoriteProducts = useSelector((state) => state.data.favoriteProducts);

  return (
    <div className={classes.search__nav_wrapper}>
      <div className={classes.search__nav}>
        <div className={classes.adres__phone_container}>
          <div className={classes.adres__container}>
            <Icon
              icon="material-symbols:location-on"
              className={classes.icon}
            />
            <p className={classes.adres}>
              Rezon.eu<br></br>
              ul.Ketlinga 1 <br></br>
              78-100 Kołobrzeg
            </p>
          </div>
          <div className={classes.phone__container}>
            <p className={classes.text}>Zadzwoń do Nas !</p>
            <p className={classes.phone}>+48 355 14 50</p>
          </div>
        </div>

        <SearchBar />

        <div className={classes.filterMenu__container}>
          <FilterMenu />
          <div className={classes.favorite__icon_container}>
            <Icon icon="mdi:cards-heart" className={classes.icon} />
            <p className={classes.favorites__count}>
              {favoriteProducts ? favoriteProducts.length : 0}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchNavigation;
