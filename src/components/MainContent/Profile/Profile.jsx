import React from "react";
import MyPosts from "./Posts/MyPosts";
import classes from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {findAllByDisplayValue} from "@testing-library/react";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo/>
      <MyPosts
        postData={props.state.postData}
        newPostText={props.state.newPostText}
        dispatch={props.dispatch}
        // addPost={props.addPost}
        // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;


