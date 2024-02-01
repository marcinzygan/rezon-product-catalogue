import React from "react";
import { Icon } from "@iconify/react";
import { useDispatch, useSelector } from "react-redux";
import { openNav } from "@/state/navigationSlice";
import classes from "./navBar.module.css";
import Image from "next/image";

const NavBar = () => {
  const dispatch = useDispatch();
  const isNavOpen = useSelector((state) => state.nav.isNavOpen);

  return (
    <nav className={classes.nav__container} id="home">
      <div className={classes.nav}>
        <div className={classes.next__img}>
          <a href="/">
            <Image
              fill
              className={classes.next__logo}
              src={"/logo.png"}
              alt={"rezon company logo"}
            />
          </a>
        </div>
        <ul id="nav__list" className={classes.nav__list}>
          <li className={classes.nav__li}>
            <a className={classes.nav__link} href="/">
              Katalog Produktów
            </a>
          </li>
          <li className={classes.nav__li}>
            <a className={classes.nav__link} href="/o_nas">
              O Nas
            </a>
          </li>
          <li className={classes.nav__li}>
            <a className={classes.nav__link} href="/handlowcy">
              Przedstawiciele
            </a>
          </li>
          <li className={classes.nav__li}>
            <a className={classes.nav__link} href="/kontakt">
              Kontakt
            </a>
          </li>
        </ul>
        <Icon
          icon="pajamas:hamburger"
          className={classes.nav__button}
          onClick={() => dispatch(openNav(isNavOpen))}
        />{" "}
        <div className={classes.icons__container}>
          <a href="https://www.facebook.com/rezon.eu">
            <Icon icon="jam:facebook-circle" className={classes.social__icon} />
          </a>
          <a href="https://twitter.com/RezonTrendygift">
            <Icon icon="jam:twitter-circle" className={classes.social__icon} />
          </a>
          <a href="https://www.linkedin.com/company/90961880">
            <Icon icon="jam:linkedin-circle" className={classes.social__icon} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
