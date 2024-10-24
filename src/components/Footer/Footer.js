import { Icon } from "@iconify/react";
import React from "react";
import classes from "./footer.module.css";
import Link from "next/link";
const Footer = () => {
  // Dynamic date Display
  const date = new Date().getFullYear();
  //  Component
  return (
    <footer className={classes.footer} id="footer">
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
            <a href="/" className={classes.footer__link}>
              Strona Główna
            </a>
            <a href="/o_nas" className={classes.footer__link}>
              O Nas
            </a>

            <a className={classes.footer__link} href="/handlowcy">
              Przedstawiciele
            </a>
            <a href="/kontakt" className={classes.footer__link}>
              Kontakt
            </a>
            <a className={classes.footer__link} href="/polityka_prywatnosci">
              Polityka prywatności
            </a>
          </div>
        </div>
        {/* SOCIAL MEDIA */}
        <div className={classes.sitemap__wrapper}>
          <div className={classes.footer__links_container}>
            <h4 className={classes.h4__txt}>Social Media .</h4>
            <a
              href="https://www.facebook.com/rezon.eu"
              className={classes.footer__link}
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/trendygift.eu/"
              className={classes.footer__link}
            >
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className={classes.footer__date_container}>
        <p className={classes.footer__date}>{date}</p>
        <p className={classes.footer__copy_name}>© Rezon.eu</p>
        <p className={classes.developer__details}>
          Website by:<Link href="https://zygandesign.com">ZyganDesign</Link>
        </p>
      </div>

      <a id="arrow" className={classes.top__arrow} href="#home">
        <Icon icon="mdi:arrow-top-bold-box" className={classes.arrow__icon} />
      </a>
    </footer>
  );
};

export default Footer;
