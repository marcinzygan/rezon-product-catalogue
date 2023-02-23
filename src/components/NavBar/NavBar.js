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
          <Image
            fill
            className={classes.next__logo}
            src={"/logo.png"}
            alt={"rezon company logo"}
          />
        </div>
        {/* <div className={classes.menuDetails__wrapper}>
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
            <div className={classes.email}>
              <Icon icon="ic:baseline-email" />
              <p>Email: hurtownia@rezon.eu</p>
            </div>
          </div>
        </div> */}
        <ul id="nav__list" className={classes.nav__list}>
          <li className={classes.nav__li}>
            <a className={classes.nav__link} href="/">
              Strona Główna
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
          <Icon icon="jam:facebook-circle" className={classes.social__icon} />

          <Icon icon="jam:twitter-circle" className={classes.social__icon} />
          <Icon icon="jam:linkedin-circle" className={classes.social__icon} />
        </div>
      </div>

      {/* <div className={classes.logo__container}>
        <img className={classes.logo} src="/images/logo1.jpg"></img>
        <img className={classes.logo} src="/images/logo2.jpg"></img>
        <img className={classes.logo} src="/images/logo3.jpg"></img>
        <img className={classes.logo} src="/images/logo4.jpg"></img>
      </div> */}
    </nav>
  );
};

export default NavBar;
