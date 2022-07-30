import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./FriendsItem.module.css";

const FriendsItem = (props) => {
  return (
    <div className={classes.friends}>
      <div>
        <div>
          <img src={props.friendsImage} alt="Error" />
        </div>
        <div>{props.name}</div>
      </div>
    </div>
  );
};

export default FriendsItem;
