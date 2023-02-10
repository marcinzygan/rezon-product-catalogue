import React from "react";
import classes from "./categoryCard.module.css";
const CategoryCard = (props) => {
  return (
    <div className={classes.category__card}>
      {/* CHECK CATEGORY AND DISPLAY SVG FOR THAT CATEGORY */}
      {/* Magnesy */}
      {props.category === "magnesy" && (
        <img
          src=".\images\Pictograms\Masnesy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Breloki */}
      {props.category === "breloki" && (
        <img
          src=".\images\Pictograms\Breloki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Otwieracze */}
      {props.category === "otwieracze" && (
        <img
          src=".\images\Pictograms\Otwieracze.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Kubki i Podkadki */}
      {props.category === "kubki i podkładki" && (
        <img
          src=".\images\Pictograms\Kubki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Długopisy */}
      {props.category === "długopisy" && (
        <img
          src=".\images\Pictograms\Długopisy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Czapki i Nakrycia Głowy */}
      {props.category === "czapki i nakrycia głowy" && (
        <img
          src=".\images\Pictograms\Nakrycia.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Bransoletki */}
      {props.category === "bransoletki" && (
        <img
          src=".\images\Pictograms\Bransoletki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Tekstylia */}
      {props.category === "tekstylia" && (
        <img
          src=".\images\Pictograms\Tekstylia.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Ramki do Zdjec */}
      {props.category === "ramki do zdjęć" && (
        <img
          src=".\images\Pictograms\Ozdoby.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Akcesoria Podróżne */}
      {props.category === "akcesoria podrozne" && (
        <img
          src=".\images\Pictograms\Akcesoria.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Dziecięce */}
      {props.category === "dziecięce" && (
        <img
          src=".\images\Pictograms\Dzieciece.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Do Auta */}
      {props.category === "do auta" && (
        <img
          src=".\images\Pictograms\DoAuta.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Zapalniczki */}
      {props.category === "zapalniczki i popielniczki" && (
        <img
          src=".\images\Pictograms\Zapalniczki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Upominki Biznesowe */}
      {props.category === "upominki biznesowe" && (
        <img
          src=".\images\Pictograms\Upominki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Sublimacja */}
      {props.category === "sublimacja" && (
        <img
          src=".\images\Pictograms\Sublimacja.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      <p className={classes.category__name}>{props.category}</p>
    </div>
  );
};

export default CategoryCard;
