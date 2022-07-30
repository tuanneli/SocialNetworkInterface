import {parseCSS} from "@testing-library/jest-dom/dist/utils";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {
  if (action.type === ADD_POST) {
    {
      const newPost = {
        id: 4,
        message: state.newPostText,
        likes: 0,
      };
      state.postData.push(newPost);
      state.newPostText = "";
    }
  } else if (action.type === UPDATE_NEW_POST_TEXT) {
    state.newPostText = action.newPostText;
  }
  return state;
}
export const addPostActionCreator = () => {
  return {type: ADD_POST};
}
export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}


export default profileReducer;
