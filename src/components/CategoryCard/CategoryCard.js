import React from "react";
import classes from "./categoryCard.module.css";
const CategoryCard = (props) => {
  return (
    <div className={classes.category__card}>
      <p className={classes.category__name}>{props.category}</p>
    </div>
  );
};

export default CategoryCard;
