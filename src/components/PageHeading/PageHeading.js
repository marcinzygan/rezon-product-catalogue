import React from "react";
import classes from "./pageHeading.module.css";

const PageHeading = (props) => {
  return (
    <div className={classes.heading__container}>
      <h2 className={classes.heading}>{props.heading}</h2>
      <div className={classes.subHeading}>{props.subHeading}</div>
    </div>
  );
};

export default PageHeading;
