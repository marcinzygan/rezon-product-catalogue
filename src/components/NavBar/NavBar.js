import React from "react";
import FilterMenu from "../filterMenu/FilterMenu";
import classes from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <FilterMenu />
    </div>
  );
};

export default NavBar;
