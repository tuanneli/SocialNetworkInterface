import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../../validator/validator";
import {Textarea} from "../../../common/FormsControl/FormsControl";

const MyPosts = React.memo((props) => {
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

  const addNewPostText = (values) => {
    props.addPost(values.addPostText)
  }

  return (
    <div className={classes.posts}>
      <h1> My post</h1>
      <AddPostFormRedux onSubmit={addNewPostText}/>
      {postElements}
    </div>
  );
});

const maxLength30 = maxLengthCreator(30);

const AddPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={classes.addPost}>
        <div>
          <Field component={Textarea} name={"addPostText"}
                 placeholder={"Enter here your post"}
                 validate={[required, maxLength30]}
          />
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
    </form>
  )
}

const AddPostFormRedux = reduxForm({form: "addPostForm"})(AddPostForm);

export default MyPosts;
