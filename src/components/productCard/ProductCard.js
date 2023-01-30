import classes from "./productCard.module.css";
import React from "react";
import { useSelector } from "react-redux";
const ProductCard = () => {
  const data = useSelector((state) => state.data.originalData);
  console.log(data);
  return data.map((product) => (
    <>
      <div className={classes.background}>
        <div key={product.id}>{product.identyfikator}</div>
      </div>
    </>
  ));
};

export default ProductCard;
