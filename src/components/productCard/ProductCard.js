import classes from "./productCard.module.css";
import React from "react";
import { useSelector } from "react-redux";
const ProductCard = () => {
  const data = useSelector((state) => state.data.originalData);
  console.log(data);
  const cards = data.map((product) => (
    <div className={classes.cards__container}>
      <div className={classes.card} key={product.id}>
        <div>{product.identyfikator}</div>
        <div>{product.opis}</div>
        <div>{product.cena}</div>
      </div>
    </div>
  ));
  return <div className={classes.cards__container}>{cards}</div>;
};

export default ProductCard;
