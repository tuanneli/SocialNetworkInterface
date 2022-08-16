import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

import classes from "./DrawDialogs.module.css";
import UserName from "./UserName/UserName";

const DrawDialogs = (props) => {
  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogHeader}>
        <h1>Dialogs</h1>
      </div>
      {props.dialogElements}
    </div>
  );
};

export default DrawDialogs;
