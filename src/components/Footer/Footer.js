import { Icon } from "@iconify/react";
import React from "react";
import classes from "./footer.module.css";
const Footer = () => {
  // Dynamic date Display
  const date = new Date().getFullYear();
  //  Component
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
            <p>
              Nip: 6711400398<br></br>Regon: 330420620 <br></br>
              Krs: 0000947122
            </p>
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
          <p className={classes.company__name}>Rezon Dystrybucja Sp. z.o.o</p>
          <div className={classes.adress}>
            <Icon icon="ic:round-location-on" />{" "}
            <p>
              Adres: ul. Ketlinga 1 , 78-100 Kołobrzeg <br></br>Oddział: 95-030
              Rzgów k. Łodzi, ul. Tuszyńska 66B
            </p>
          </div>
          <div className={classes.nip}>
            <Icon icon="material-symbols:folder-open" />
            <p>
              Nip: 6711849218 <br></br>Regon: 520953559<br></br>
              Krs: 0000924148
            </p>
          </div>
          <div className={classes.phone}>
            <Icon icon="material-symbols:phone-in-talk-watchface-indicator" />
            <p>Telefon: +48 603 941 941</p>
          </div>
          <div className={classes.email}>
            <Icon icon="ic:baseline-email" />
            <p>Email: dystrybucja@rezon.eu</p>
          </div>
        </div>
        {/* MAPA STRONY */}
        <div className={classes.sitemap__wrapper}>
          <div className={classes.footer__links_container}>
            <h4 className={classes.h4__txt}>Mapa strony .</h4>
            <a href="/#home" className={classes.footer__link}>
              Strona Główna
            </a>
            <a href="/o_nas" className={classes.footer__link}>
              Kim Jesteśmy ?
            </a>
            {/* <a href="/oferta" className={classes.footer__link} >
              Nasza Oferta
            </a> */}
            <a href="/kontakt" className={classes.footer__link}>
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
      {/* <div className={classes.logo__container}>
        <img className={classes.footer__logo} src="/images/logo1.jpg"></img>
        <img className={classes.footer__logo} src="/images/logo2.jpg"></img>
        <img className={classes.footer__logo} src="/images/logo3.jpg"></img>
        <img className={classes.footer__logo} src="/images/logo4.jpg"></img>
      </div> */}
      <div className={classes.footer__date_container}>
        <p className={classes.footer__date}>{date}</p>
        <p className={classes.footer__copy_name}>© Rezon.eu</p>
      </div>

      <a id="arrow" className={classes.top__arrow} href="#home">
        <Icon icon="mdi:arrow-top-bold-box" className={classes.arrow__icon} />
      </a>
    </footer>
  );
};

export default Footer;
