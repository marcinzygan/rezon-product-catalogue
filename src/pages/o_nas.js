import PageHeading from "@/components/PageHeading/PageHeading";
import React from "react";
import classes from "../styles/oNas.module.css";
const o_nas = () => {
  return (
    <main className="main__page_layout">
      <PageHeading
        heading={"O nas"}
        subHeading={"Krótka historia naszej firmy"}
      />
      <div className={classes.section__wrapper}>
        <div>
          <h4 className={classes.h4__txt}>Nasza firma</h4>
          <p className={classes.text}>
            Nasza firma rozpoczęła swoją działalność w 1996 roku, specjalizując
            się w bezpośrednim imporcie towarów z Chin. Przez ponad 20 lat naszą
            główną dziedziną była sztuczna biżuteria, ozdoby do włosów, modne
            dodatki, upominki oraz artykuły dekoracyjne. Do dziś ten asortyment
            stanowi znaczną część naszej sprzedaży.
          </p>
        </div>
        <div>
          <h4 className={classes.h4__txt}>Ewolucja naszego profilu</h4>
          <p className={classes.text}>
            W 2016 roku podjęliśmy decyzję o stopniowej zmianie profilu naszej
            firmy, skupiając się na produkcji upominków, biżuterii i dekoracji w
            Polsce. Nasza oferta obejmuje teraz ciekawe i przydatne produkty,
            które z pewnością przypadną do gustu naszym klientom.
          </p>
        </div>
        <div>
          <h4 className={classes.h4__txt}>Prezenty i gadżety reklamowe</h4>
          <p className={classes.text}>
            Nasze produkty doskonale sprawdzają się jako prezenty lub oryginalne
            gadżety reklamowe. W naszym asortymencie znajduje się szeroki wybór
            biżuterii, obejmujący różnego rodzaju kolczyki i bransoletki, które
            z pewnością spodobają się młodzieży. Dla dzieci oferujemy wiele
            ciekawych zabawek, takich jak klocki, urządzenia puszczające bańki
            mydlane oraz zakręcone, gumowe zwierzaki, piłki i wiele innych
            produktów.
          </p>
        </div>
        <div>
          <h4 className={classes.h4__txt}>Oryginalne gadżety reklamowe</h4>
          <p className={classes.text}>
            Oprócz biżuterii i zabawek, w naszym asortymencie znajdują się także
            różnego rodzaju oryginalne gadżety reklamowe, które mogą być
            spersonalizowane poprzez umieszczenie na nich logo firmy. Wśród
            produktów tego typu można znaleźć breloki do kluczy, magnesy na
            lodówkę, otwieracze do butelek oraz kubki.
          </p>
        </div>
        <div>
          <h4 className={classes.h4__txt}>Nasza jakość i doświadczenie</h4>
          <p className={classes.text}>
            Dzięki naszej bogatej ofercie oraz wieloletniemu doświadczeniu w
            branży, jesteśmy w stanie zapewnić naszym klientom produkty
            najwyższej jakości. Każdy z naszych produktów jest starannie
            wyselekcjonowany i wykonany z dbałością o detale. Zależy nam na
            zapewnieniu satysfakcji z zakupów naszym klientom.
          </p>
        </div>
        <div>
          <h4 className={classes.h4__txt}>Nasza jakość i doświadczenie</h4>
          <p className={classes.text}>
            Serdecznie zapraszamy do zapoznania się z naszą szeroką gamą
            produktów. Bez względu na to, czy szukasz idealnego prezentu,
            oryginalnego gadżetu reklamowego, czy po prostu interesujących
            dekoracji, mamy pewność, że znajdziesz coś odpowiedniego w naszej
            ofercie.
          </p>
        </div>
        <div>
          <h4 className={classes.h4__txt}>Skontaktuj się z nami</h4>
          <p className={classes.text}>
            Nasz zespół jest gotowy do udzielenia odpowiedzi na wszystkie Twoje
            pytania i wątpliwości. Jeśli potrzebujesz dodatkowych informacji lub
            masz jakiekolwiek zapytania, nie wahaj się skontaktować z nami.
            Jesteśmy dostępni pod wskazanymi danymi kontaktowymi i chętnie
            pomożemy.<br></br>
            Dziękujemy za odwiedzenie naszej strony i zapraszamy do skorzystania
            z naszej oferty!
          </p>
        </div>
        <div className={classes.marki__wrapper}>
          <h4 className={classes.h4__txt}>Nasze marki</h4>

          <div className={classes.logo__container}>
            <a href="https://trendygift.eu">
              <img className={classes.logo} src="./logo_trendy.png"></img>
            </a>
            <a href="https://hotelgift.eu">
              <img className={classes.logo} src="./logo_hotel.jpg"></img>
            </a>
            <a href="https://rezon.eu">
              <img className={classes.logo} src="./logo.png"></img>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default o_nas;
