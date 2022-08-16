import React from "react";
import Icon from "./imgs/Icon.png";
import classes from "./Header.module.css";
import {NavLink} from "react-router-dom";
import {logoutThunkCreator} from "../../redux/auth-reducer";

const Header = (props) => {
  return (
    <header className={classes.header}>
      <img src={Icon}/>
      <div className={classes.loginBlock}>{
        props.isAuth
          ?
          <div>
            {props.login} <br/>
            <button onClick={props.logoutThunkCreator}> Log out</button>
          </div>
          :
          <NavLink to={'/Login'}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
