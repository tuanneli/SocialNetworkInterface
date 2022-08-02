import {parseCSS} from "@testing-library/jest-dom/dist/utils";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  postData: [
    {id: 1, message: "Hi how are you?", likes: "5"},
    {id: 2, message: "Hables español?", likes: "8"},
    {id: 3, message: "O solo ingles?", likes: "11"},
  ],
  newPostText: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: state.newPostText,
        likes: 0,
      };
      return {
        ...state,
        postData: [...state.postData, newPost],
        newPostText: ""
      }
    }
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newPostText,
      }
    default:
      return state;
  }
}
export const addPostActionCreator = () => {
  return {type: ADD_POST};
}
export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}

export default profileReducer;
