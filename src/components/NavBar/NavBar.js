import React from "react";
import { Icon } from "@iconify/react";
import FilterMenu from "../filterMenu/FilterMenu";
import classes from "./navBar.module.css";

const NavBar = () => {
  return (
    <nav className={classes.nav__container}>
      <div className={classes.nav}>
        <div className={classes.logo__container}>
          <img className={classes.logo} src="/images/logo1.jpg"></img>
          <img className={classes.logo} src="/images/logo2.jpg"></img>
          <img className={classes.logo} src="/images/logo3.jpg"></img>
          <img className={classes.logo} src="/images/logo4.jpg"></img>
        </div>
        <div className={classes.menuDetails__wrapper}>
          <div className={classes.company__details_container}>
            <p className={classes.company__name}>Rezon Sp. z o.o</p>
            <div className={classes.adress}>
              <Icon icon="ic:round-location-on" />{" "}
              <p>Adres: ul. Ketlinga 1 , 78-100 Kołobrzeg</p>
            </div>
            <div className={classes.nip}>
              <Icon icon="material-symbols:folder-open" />
              <p>Nip: 6711400398</p>
            </div>
            <div className={classes.phone}>
              <Icon icon="material-symbols:phone-in-talk-watchface-indicator" />
              <p>Telefon: 94 355 14 50</p>
            </div>
          </div>
          <FilterMenu />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
