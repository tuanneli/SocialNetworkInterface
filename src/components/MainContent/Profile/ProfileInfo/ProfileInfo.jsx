import React from "react";
import classes from "./ProfileInfo.module.css";
import WelcomHome from "./imgs/WelcomeHome.png";
import Preloader from "../../../common/preloader/preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader/>
  }
  return (
    <div>
      <img className={classes.topImage} src={WelcomHome} alt="Image"/>
      <ProfileStatusWithHooks status={props.status}
                              updateStatus={props.updateStatus}/>
      <div>
        <img src={props.profile.photos.large} alt=""/>
      </div>
      <div>
        <h2>Full name: {props.profile.fullName}</h2>
      </div>
      <div>
        <h2>Looking for a job: {props.profile.lookingForAJobDescription}</h2>
      </div>
      <div>
        <h2>Looking for a job
          status: {props.profile.lookingForAJob ? 'YES' : 'NO'}</h2>
      </div>
    </div>
  );
};

export default ProfileInfo;
