import React from "react";
import classes from "./TopBar.module.css";
const TopBar = props => {
  return (
      <div className={classes.topBar}>
        <h1 className={classes.titleName}>Coronavirus COVID-19 Global Cases</h1>
        <p className={classes.myName}>By Steven Yan</p>
      </div>
  );
};

export default TopBar;
