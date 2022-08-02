import React from "react";
import Message from "./DrawMessages/Message/Message";
import classes from "./Messages.module.css";
import UserName from "./DrawDialogs/UserName/UserName";
import DrawDialogs from "./DrawDialogs/DrawDialogs";
import DrawMessagesContainer from "./DrawMessages/DrawMessagesContainer";

const Messages = (props) => {
  const state = props.store.getState().messagesPage;

  let dialogElements = state.dialogsData.map((dialog) => {
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
      <DrawMessagesContainer
        // store={props.store}
      />
    </div>
  );
};

export default Messages;
