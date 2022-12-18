import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { Field, reduxForm } from "redux-form";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  // let newMessageElement = React.createRef();

  // let OnaddDialog = () => {
  //   props.addDialog();
  // };
  // let onDialogChange = () => {
  //   let text = newMessageElement.current.value;
  //   props.updateNewDialogText(text);
  // };
  let addNewMessage = (values) => {
    props.addDialog(values.newDialogText);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>{messagesElements}</div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component="textarea"
          name="newDialogText"
          placeholder="Enter your message"
        />
        <div>
          <button>Send</button>
        </div>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
