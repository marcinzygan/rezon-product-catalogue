import React from "react";
import classes from "./pageHeading.module.css";

const PageHeading = (props) => {
  return (
    <div>
      <h2 className={classes.heading}>{props.heading}</h2>
      <div className={classes.subHeading}>{props.subHeading}</div>
    </div>
  );
};

export default PageHeading;
