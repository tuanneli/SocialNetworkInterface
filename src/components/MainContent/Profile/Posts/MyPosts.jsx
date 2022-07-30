import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../redux/profile-reducer";

const MyPosts = (props) => {
  let postElements = [
    props.postData.map((postData) => {
      return (
        <Post
          message={postData.message}
          likes={postData.likes}
          id={postData.id}
        />
      );
    }),
  ];

  let newPostElement = React.createRef();

  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.posts}>
      <h1> My post</h1>
      <div className={classes.addPost}>
        <div>
          <input
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      {postElements}
    </div>
  );
};

export default MyPosts;
