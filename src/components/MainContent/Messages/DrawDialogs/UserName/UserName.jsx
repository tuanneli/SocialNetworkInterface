import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./UserName.module.css";

const UserName = (props) => {
  let path = "/Messages/" + props.id;
  return (
    <div className={classes.dialog}>
      <NavLink to={path}>
        <img src={props.dialogImage} alt="Image of a person" />
        {props.name}
      </NavLink>
    </div>
  );
};

export default UserName;
