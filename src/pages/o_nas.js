import PageHeading from "@/components/PageHeading/PageHeading";
import React from "react";
import classes from "../styles/oNas.module.css";
const o_nas = () => {
  return (
    <main className={classes.main}>
      <PageHeading
        heading={"O nas"}
        subHeading={"Krótka historia naszej firmy"}
      />

      <p className={classes.text}>
        Nasza firma rozpoczęła swoją działalność w 1996 roku, zajmując się
        bezpośrednim importem towarów z Chin. Przez 20 lat nasza specjalność
        obejmowała sztuczną biżuterię, ozdoby do włosów, modne dodatki, upominki
        oraz artykuły dekoracyjne. Nadal ten asortyment stanowi znaczną część
        naszej sprzedaży.
      </p>
      <p className={classes.text}>
        W 2016 roku postanowiliśmy zmienić sukcesywnie profil naszej firmy,
        skupiając się na produkcji w Polsce upominków, biżuterii i dekoracji. W
        naszej ofercie znajdują się ciekawe i przydatne produkty, które z
        pewnością przypadną do gustu naszym klientom.
      </p>
      <p className={classes.text}>
        Nasze produkty doskonale sprawdzają się jako prezenty lub oryginalne
        gadżety reklamowe. W naszym asortymencie znajduje się szeroki wybór
        biżuterii, w skład której wchodzą różnego rodzaju kolczyki i
        bransoletki, które z pewnością spodobają się młodzieży. Dla dzieci
        oferujemy wiele ciekawych zabawek, takich jak klocki, urządzenia
        puszczające bańki mydlane, a także zakręcone, gumowe zwierzaki, piłki i
        wiele innych produktów.
      </p>
      <p className={classes.text}>
        Oprócz tego w naszym asortymencie znajdują się także różnego rodzaju
        oryginalne gadżety reklamowe, które mogą być spersonalizowane poprzez
        umieszczenie na nich logo firmy. Wśród produktów tego typu można znaleźć
        breloki do kluczy, magnesy na lodówkę, otwieracze do butelek oraz kubki.
      </p>
      <p className={classes.text}>
        Dzięki naszej bogatej ofercie i wieloletniemu doświadczeniu w branży,
        jesteśmy w stanie zapewnić naszym klientom produkty najwyższej jakości i
        satysfakcję z zakupów. Zapraszamy do zapoznania się z naszą ofertą i do
        kontaktu z nami w razie jakichkolwiek pytań lub wątpliwości.
      </p>
    </main>
  );
};

export default o_nas;
