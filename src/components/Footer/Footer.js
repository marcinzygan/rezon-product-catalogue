import { Icon } from "@iconify/react";
import React from "react";
import classes from "./footer.module.css";
const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.details__wrapper}>
        {/* REZON */}
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
        {/* DYSTRYBUCJA REZON */}
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
        {/* MAPA STRONY */}
        <div className={classes.sitemap__wrapper}>
          <div className={classes.footer__links_container}>
            <h4 className="h4__txt">
              Mapa strony <span className="span__accentFirst">.</span>
            </h4>
            <a href="/#home" className={classes.footer__link} scroll={false}>
              Strona Główna
            </a>
            <a href="/o_nas" className={classes.footer__link} scroll={false}>
              Kim Jesteśmy ?
            </a>
            {/* <a href="/oferta" className={classes.footer__link} scroll={false}>
              Nasza Oferta
            </a> */}
            <a href="/kontakt" className={classes.footer__link} scroll={false}>
              Kontakt
            </a>
            <a className={classes.footer__link} href="/handlowcy">
              Handlowcy
            </a>
            <a className={classes.footer__link} href="/polityka_prywatnosci">
              Polityka prywatności
            </a>
          </div>
        </div>
      </div>
      <img className={classes.footer__logo} src="/images/logo4.jpg"></img>

      <a id="arrow" class={classes.top__arrow} href="#home">
        <Icon icon="mdi:arrow-top-bold-box" className={classes.arrow__icon} />
      </a>
    </footer>
  );
};

export default Footer;
