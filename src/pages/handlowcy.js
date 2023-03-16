import React from "react";
import classes from "../styles/handlowcy.module.css";
import { Icon } from "@iconify/react";
import PageHeading from "@/components/PageHeading/PageHeading";
const handlowcy = () => {
  return (
    <main className="main__page_layout">
      <PageHeading
        heading={"Przedstawiciele Handlowi"}
        subHeading={"Zapraszamy do kontaktu"}
      />

      <h2 className={classes.handlowcy__h2}>
        PRZEDSTAWICIELE HANDLOWI (POMORZE):
      </h2>
      <div className={classes.handlowcy__container}>
        {/* 1 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Krzysztof Szulc</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />
            Tel: +48 605 319 027
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} /> E-mail:
            krzysztof.szulc@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: Świnoujście, Międzyzdroje, Międzywodzie, Dziwnów, Dziwnówek,
            Pobierowo, Pustkowo, Trzęsacz, Rewal, Niechorze
          </p>
        </div>
        {/* 2 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Mariusz Koperski</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />{" "}
            Tel : +48 605 319 025{" "}
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} />
            E-mail: mariusz.koperski@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: Pogorzelica, Mrzeżyno, Dźwirzyno, Grzybowo, Sianożęty,
            Ustronie Morskie, Sarbinowo, Chłopy, Mielno, Unieście, Łazy
          </p>
        </div>
        {/* 3 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Mariusz Kałuża</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />{" "}
            Tel : +48 691 917 555{" "}
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} />
            E-mail: mariusz.kaluza@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: Dąbki, Darłówko, Wicie, Jarosławiec, Ustka, Rowy, Łeba,
            Dębki, Jastrzębia Góra, Chłapowo, Ostrowo
          </p>
        </div>
        {/* 4 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Marcin Leśniewski</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />{" "}
            Tel : +48 605 319 026{" "}
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} />
            E-mail: marcin.lesniewski@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: Władysławowo, Jastarnia, Jurata, Hel, Gdynia, Sopot, Gdańsk,
            Jantar, Karwia, Stegna, Krynica Morska, Sztutowo, Kąty Rybackie,
            Malbork, Sztum, Reda
          </p>
        </div>
        {/* 5 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Mariusz Łukaszewicz</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />{" "}
            Tel : +48 502 050 824{" "}
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} />
            E-mail: mariusz.lukaszewicz@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: Oferta dla hoteli, ośrodków i firm
          </p>
        </div>
        {/* 6 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Daniel Możdżyński</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />{" "}
            Tel : +48 607 370 370{" "}
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} />
            E-mail: daniel.mozdzynski@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: Indywidualne oferty dla firm
          </p>
        </div>
      </div>
      {/* HANDLOWCY POLSKA CENTRALNA */}
      <h2 className={classes.handlowcy__h2}>
        PRZEDSTAWICIELE HANDLOWI (POLSKA CENTRALNA & GÓRY & MAZURY):
      </h2>
      <div className={classes.handlowcy__container}>
        {/* 1 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Łukasz Strojek</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />
            Tel: +48 607 941 941
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} /> E-mail:
            lukasz.strojek@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: woj. warmińsko-mazurskie, woj. kujawsko-pomorskie, woj.
            wielkopolskie, woj. mazowieckie, woj. podlaskie, woj.
            świętokrzyskie, woj. lubelskie, woj. podkarpackie
          </p>
        </div>
        {/* 2 */}
        <div className={classes.personal__details_container}>
          <p className={classes.name}>Łukasz Cywiński</p>
          <p className={classes.icon__container}>
            <Icon
              icon="material-symbols:phone-in-talk-watchface-indicator"
              className={classes.icon}
            />
            Tel: +48 691 941 941
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ic:baseline-email" className={classes.icon} /> E-mail:
            lukasz.cywinski@rezon.eu
          </p>
          <p className={classes.icon__container}>
            <Icon icon="ph:globe" className={classes.icon} />
            Region: woj. łódzkie, woj. śląskie, woj. małopolskie
          </p>
        </div>
      </div>
    </main>
  );
};

export default handlowcy;
