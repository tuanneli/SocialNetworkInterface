import {profileAPI, userAPI} from "../api/api";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';

const initialState = {
  postData: [
    {id: 1, message: "Hi how are you?", likes: "5"},
    {id: 2, message: "Hables español?", likes: "8"},
    {id: 3, message: "O solo ingles?", likes: "11"},
  ],
  newPostText: "",
  profile: null,
  status: "",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 4,
        message: action.addPostText,
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
    case DELETE_POST:
      return {
        ...state,
        postData: [...state.postData.filter(post => post.id !== action.postId)]
      }
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile,
      }
    case SET_STATUS:
      return {
        ...state,
        status: action.status,
      }
    default:
      return state;
  }
}

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newPostText: text};
}

export const addPostActionCreator = (addPostText) => {
  return {type: ADD_POST, addPostText};
}

export const deletePostAC = (postId) => {
  return {type: DELETE_POST, postId};
}

export const setUserProfile = (profile) => {
  return {type: SET_USER_PROFILE, profile}
}

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await profileAPI.getProfile(userId)
  dispatch(setUserProfile(response.data));
}

export const setStatus = (status) => {
  return {type: SET_STATUS, status}
}

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId)
  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status)
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;
