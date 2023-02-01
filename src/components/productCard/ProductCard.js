import classes from "./productCard.module.css";
import React from "react";
import Image from "next/image";
const ProductCard = (card) => {
  console.log(card.image);
  return (
    <>
      <div className={classes.card}>
        <div className={classes.card__header}>
          <div className={classes.card__name}>{card.identyfikator}</div>
          <img className={classes.img} src={card.image} />
          <div className={classes.cena}>
            Cena <span className={classes.cena__span}>{card.cena} zł</span>
          </div>
        </div>
        <div>{card.opis}</div>

        <div>{card.id}</div>
      </div>
    </>
  );
};

export default ProductCard;
