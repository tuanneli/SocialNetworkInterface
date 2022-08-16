import React from "react";

import classes from "./DrawDialogs.module.css";

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
