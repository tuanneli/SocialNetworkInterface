import React from "react";
import {
  addMessageActionCreator,
  updateNewMessageTextActionCreator
} from "../../../../redux/messages-reducer";
import DrawMessages from "./DrawMessages";
import {connect} from "react-redux";

const mapStateMessages = (state) => {
  return {
    messagesData: state.messagesPage.messagesData,
    newMessageText: state.messagesPage.newMessageText,
    // isAuth: state.auth.isAuth
  }
}

const mapDispatchMessages = (dispatch) => {
  return {
    addMessage: (newMessageBody) => {
      dispatch(addMessageActionCreator(newMessageBody))
    },
    onMessageChange: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
  }
}
const DrawMessagesContainer = connect(mapStateMessages, mapDispatchMessages)(
  DrawMessages);

export default DrawMessagesContainer;
