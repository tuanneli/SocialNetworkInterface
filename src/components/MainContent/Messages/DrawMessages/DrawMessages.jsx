import React from "react";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import Message from "./Message/Message";
import classes from "./DrawMessages.module.css";

const DrawMessages = (props) => {
  let messagesElements = props.messagesData.map((messageItem) => {
    return <Message message={messageItem.message} id={messageItem.id}/>;
  });

  const addMessage = () => {
    props.addMessage();
  };

  let newMessageElement = React.createRef();

  const onMessageChange = (event) => {
    let text = event.target.value;
    // let text = newMessageElement.current.value;
    props.onMessageChange(text);
  };

  return (
    <div className={classes.messages}>
      <div className={classes.messagesHeder}>
        <h1>Messages</h1>
      </div>
      <div className={classes.dialogWindow}>
        <h1 style={{textAlign: "center"}}>No messages Yet</h1>
        {messagesElements}
      </div>
      <div className={classes.writeMessage}>
        <div>
          <input
            ref={newMessageElement}
            onChange={onMessageChange}
            value={props.newMessageText}
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
