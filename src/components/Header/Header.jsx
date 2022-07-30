import React from "react";
import Icon from "./imgs/Icon.png";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header className={classes.header}>
      <img src={Icon} />
    </header>
  );
};

export default Header;
