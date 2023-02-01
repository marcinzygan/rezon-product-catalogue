import classes from "./productCard.module.css";
import React from "react";
import Image from "next/image";
const ProductCard = (card) => {
  console.log(card.image);
  return (
    <>
      <div className={classes.card}>
        <div>{card.identyfikator}</div>
        <Image
          src={card.image}
          alt="Picture of the author"
          width={500}
          height={500}
        />
        <div>{card.opis}</div>
        <div>{card.cena}</div>
        <div>{card.id}</div>
      </div>
    </>
  );
};

export default ProductCard;
