import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import DrawMessages from "./DrawMessages/DrawMessages";
import Message from "./DrawMessages/Message/Message";
import classes from "./Messages.module.css";
import UserName from "./DrawDialogs/UserName/UserName";
import DrawDialogs from "./DrawDialogs/DrawDialogs";

const Messages = (props) => {
  let dialogElements = props.state.dialogsData.map((dialog) => {
    return (
      <UserName
        name={dialog.name}
        id={dialog.id}
        dialogImage={dialog.dialogImage}
      />
    );
  });

  let messagesElements = props.state.messagesData.map((messageItem) => {
    return <Message message={messageItem.message} id={messageItem.id} />;
  });

  // const DrawDialogs = (props) => {
  //   return (
  //     <div className={classes.dialogs}>
  //       <div className={classes.dialogHeader}>
  //         <h1>Dialogs</h1>
  //       </div>
  //       {props.dialogElements}
  //     </div>
  //   );
  // };

  return (
    <div className={classes.page}>
      <DrawDialogs dialogElements={dialogElements} />
      <DrawMessages
        messagesElements={messagesElements}
        state={props.state}
        addMessage={props.addMessage}
        updateNewMessageText={props.updateNewMessageText}
      />
    </div>
  );
};

export default Messages;
