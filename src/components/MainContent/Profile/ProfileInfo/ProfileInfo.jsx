import React from "react";
import classes from "./ProfileInfo.module.css";
import WelcomHome from "./imgs/WelcomeHome.png";

const ProfileInfo = () => {
  return (
    <div>
      <img className={classes.topImage} src={WelcomHome} alt="Image" />
    </div>
  );
};

export default ProfileInfo;
