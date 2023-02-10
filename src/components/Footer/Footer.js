import { Icon } from "@iconify/react";
import React from "react";
import classes from "./footer.module.css";
const Footer = () => {
  const scrollToTop = function () {};
  return (
    <footer className={classes.footer}>
      <img className={classes.footer__logo} src="/images/logo4.jpg"></img>

      <a id="arrow" class={classes.top__arrow} href="#home">
        <Icon icon="mdi:arrow-top-bold-box" className={classes.arrow__icon} />
      </a>
    </footer>
  );
};

export default Footer;
