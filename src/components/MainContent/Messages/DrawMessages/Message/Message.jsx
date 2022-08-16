import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Message.module.css";

const Message = (props) => {
  return <div className={classes.message}>{props.message}</div>;
};

export default Message;
