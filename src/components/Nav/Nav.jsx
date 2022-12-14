import React from "react";
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendsItem/FriendsItem";
import classes from "./Nav.module.css";

const Nav = (props) => {
  const FriendsFiels = props.state.friendsData.map((friendsData) => {
    return (
      <FriendsItem
        name={friendsData.name}
        friendsImage={friendsData.friendsImage}
        id={friendsData.id}
      />
    );
  });

  const NavbarComandsList = [
    "Profile",
    "Messages",
    "News",
    "Music",
    "Settings",
  ];

  const NavbarComands = NavbarComandsList.map((NavbarData) => {
    let path = "/" + NavbarData;
    return (
      <div className={classes.item}>
        <NavLink
          to={path}
          className={(navData) =>
            navData.isActive ? classes.active : classes.item
          }
        >
          {NavbarData}
        </NavLink>
      </div>
    );
  });

  return (
    <nav className={classes.nav}>
      <div className={classes.references}>
        {NavbarComands}
        <div className={classes.item}>
          <NavLink
            className={(navData) =>
              navData.isActive ? classes.active : classes.item
            }
            to="/Friends"
          >
            Friends
            <div className={classes.nameAndImage}>{FriendsFiels}</div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
