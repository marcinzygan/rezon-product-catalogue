import React from "react";
import classes from "./categoryCard.module.css";
const CategoryCard = (props) => {
  return (
    <div className={classes.category__card}>
      {/* CHECK CATEGORY AND DISPLAY SVG FOR THAT CATEGORY */}
      {props.category === "magnesy" && (
        <img
          src=".\images\Pictograms\Masnesy.svg"
          alt={props.category}
          className={classes.category__svg}
        ></img>
      )}
      <p className={classes.category__name}>{props.category}</p>
    </div>
  );
};

export default CategoryCard;
