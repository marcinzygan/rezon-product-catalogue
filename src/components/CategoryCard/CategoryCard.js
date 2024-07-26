import React from "react";
import classes from "./categoryCard.module.css";
const CategoryCard = (props) => {
  return (
    <div className={classes.category__card}>
      {/* CHECK CATEGORY AND DISPLAY SVG FOR THAT CATEGORY */}
      {/* Magnesy */}
      {props.category === "magnesy" && (
        <img
          src=".\images\pictograms\masnesy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Breloki */}
      {props.category === "breloki" && (
        <img
          src=".\images\pictograms\breloki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Otwieracze */}
      {props.category === "otwieracze" && (
        <img
          src=".\images\pictograms\otwieracze.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Ceramika i Szkło */}
      {props.category === "ceramika i szkło" && (
        <img
          src=".\images\pictograms\kubki i podkładki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Długopisy */}
      {props.category === "długopisy" && (
        <img
          src=".\images\pictograms\długopisy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Czapki i Nakrycia Głowy */}
      {props.category === "czapki i nakrycia głowy" && (
        <img
          src=".\images\pictograms\czapki i nakrycia głowy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Bransoletki */}
      {props.category === "bransoletki" && (
        <img
          src=".\images\pictograms\bransoletki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Tekstylia */}
      {props.category === "tekstylia" && (
        <img
          src=".\images\pictograms\tekstylia.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Ozdoby Domowe */}
      {props.category === "ozdoby domowe" && (
        <img
          src=".\images\pictograms\ozdoby.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Akcesoria Podróżne */}
      {props.category === "akcesoria podróżne" && (
        <img
          src=".\images\pictograms\akcesoria podróżne.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Dziecięce */}
      {props.category === "dziecięce" && (
        <img
          src=".\images\pictograms\dziecięce.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Do Auta */}
      {props.category === "do auta" && (
        <img
          src=".\images\pictograms\do auta.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Zapalniczki */}
      {props.category === "zapalniczki i popielniczki" && (
        <img
          src=".\images\pictograms\zapalniczki i popielniczki.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Upominki Biznesowe */}
      {props.category === "upominki biznesowe" && (
        <img
          src=".\images\pictograms\upominki biznesowe.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Sublimacja */}
      {props.category === "sublimacja" && (
        <img
          src=".\images\pictograms\Sublimacja.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      {/* Zestawy */}
      {props.category === "zestawy" && (
        <img
          src=".\images\pictograms\zestawy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}

      <p className={classes.category__name}>{props.category}</p>
    </div>
  );
};

export default CategoryCard;
