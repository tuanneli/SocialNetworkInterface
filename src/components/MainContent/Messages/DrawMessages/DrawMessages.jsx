import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Message from "./Message/Message";
import classes from "./DrawMessages.module.css";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../../../redux/messages-reducer";

const DrawMessages = (props) => {
  // let newMessage = React.createRef();

  const addMessage = () => {
    // let text = newMessage.current.value;
    // newMessage.current.value = "";
    // props.addMessage();
    props.dispatch(addMessageActionCreator())
  };

  const onMessageChange = (event) => {
    // let text = newMessage.current.value;
    let text = event.target.value;
    // props.updateNewMessageText(text);
    props.dispatch(updateNewMessageTextActionCreator(text))
  };
  return (
    <div className={classes.messages}>
      <div className={classes.messagesHeder}>
        <h1>Messages</h1>
      </div>
      <div className={classes.dialogWindow}>
        <h1 style={{textAlign: "center"}}>No messages Yet</h1>
        {props.messagesElements}
      </div>
      <div className={classes.writeMessage}>
        <div>
          <input
            // ref={newMessage}
            onChange={onMessageChange}
            value={props.state.newMessageText}
            placeholder="Message"
          />
        </div>
        <div>
          <button onClick={addMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default DrawMessages;
