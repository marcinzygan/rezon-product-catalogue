import React from "react";
import classes from "./pageHeading.module.css";

const PageHeading = (props) => {
  return (
    <div>
      <h2 className={classes.heading}>{props.heading}</h2>
      <p className={classes.subHeading}>{props.subHeading}</p>
    </div>
  );
};

export default PageHeading;
