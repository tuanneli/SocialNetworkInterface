import React from "react";
import Message from "./Message/Message";
import classes from "./DrawMessages.module.css";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../../../common/FormsControl/FormsControl";
import {maxLengthCreator, required} from "../../../../validator/validator";

const DrawMessages = (props) => {
  let messagesElements = props.messagesData.map((messageItem) => {
    return <Message message={messageItem.message} id={messageItem.id}/>;
  });

  const addNewMessage = (values) => {
    props.addMessage(values.newMessageBody);
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
      <AddMessageFormRedux onSubmit={addNewMessage}/>
    </div>
  );
};

const maxLength120 = maxLengthCreator(120);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={Textarea} name={"newMessageBody"}
               placeholder="Message"
               validate={[required, maxLength120]}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'})(
  AddMessageForm);

export default DrawMessages;
