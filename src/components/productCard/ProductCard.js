import classes from "./productCard.module.css";
import React from "react";

const ProductCard = (card) => {
  return (
    <>
      <div className={classes.card}>
        <div>{card.identyfikator}</div>
        <div>{card.opis}</div>
        <div>{card.cena}</div>
        <div>{card.id}</div>
      </div>
    </>
  );
};

export default ProductCard;
