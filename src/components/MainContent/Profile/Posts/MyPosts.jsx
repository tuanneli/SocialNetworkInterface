import React from "react";
// import "./../../App.css";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

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
    // let text = newPostElement.current.value;
    // newPostElement.current.value = "";
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
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
