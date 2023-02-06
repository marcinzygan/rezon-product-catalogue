import React from "react";
import FilterMenu from "../filterMenu/FilterMenu";
import classes from "./navBar.module.css";

const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo__container}>
        <img className={classes.logo} src="/images/logo1.jpg"></img>
        <img className={classes.logo} src="/images/logo2.jpg"></img>
        <img className={classes.logo} src="/images/logo3.jpg"></img>
        <img className={classes.logo} src="/images/logo4.jpg"></img>
      </div>
      <div className={classes.company__details}>DETAILS</div>
      <FilterMenu />
    </div>
  );
};

export default NavBar;
