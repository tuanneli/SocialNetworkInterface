const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

const messagesReducer = (state, action) => {
  if (action.type === ADD_MESSAGE) {
    {
      const newMessage = {
        message: state.newMessageText,
        id: 4,
      };
      state.messagesData.push(newMessage);
      state.newMessageText = "";
    }
  } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
    state.newMessageText = action.newMessageText;
  }
  return state;
}

export const updateNewMessageTextActionCreator = (text) => {
  return {type: UPDATE_NEW_MESSAGE_TEXT, newMessageText: text};
}
export const addMessageActionCreator = () => {
  return {type: ADD_MESSAGE};
}

export default messagesReducer;