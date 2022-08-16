import React from "react";
import classes from "./Messages.module.css";
import UserName from "./DrawDialogs/UserName/UserName";
import DrawDialogs from "./DrawDialogs/DrawDialogs";
import DrawMessagesContainer from "./DrawMessages/DrawMessagesContainer";
import {Navigate} from "react-router-dom";

const Messages = (props) => {
  const state = props.store.getState();
  
  if (state.auth.isAuth === false) return <Navigate to="/Login"/>;
  let dialogElements = state.messagesPage.dialogsData.map((dialog) => {
    return (
      <UserName
        name={dialog.name}
        id={dialog.id}
        dialogImage={dialog.dialogImage}
      />
    );
  });
  return (
    <div className={classes.page}>
      <DrawDialogs dialogElements={dialogElements}/>
      <DrawMessagesContainer/>
    </div>
  );
};

export default Messages;


