import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Message from "./Message/Message";
import classes from "./DrawMessages.module.css";

const DrawMessages = (props) => {
  let newMessage = React.createRef();

  const addMessage = () => {
    let text = newMessage.current.value;
    newMessage.current.value = "";
    props.addMessage(text);
  };

  const onMessageChange = () => {
    let text = newMessage.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={classes.messages}>
      <div className={classes.messagesHeder}>
        <h1>Messages</h1>
      </div>
      <div className={classes.dialogWindow}>
        <h1 style={{ textAlign: "center" }}>No messages Yet</h1>
        {props.messagesElements}
      </div>
      <div className={classes.writeMessage}>
        <div>
          <input
            ref={newMessage}
            onChange={onMessageChange}
            value={props.state.newMessageText}
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
