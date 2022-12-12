import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import { Navigate } from "react-router-dom";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));

  let messagesElements = props.messagesData.map((message) => (
    <Message message={message.message} key={message.id} id={message.id} />
  ));

  let newMessageElement = React.createRef();

  let OnaddDialog = () => {
    props.addDialog();
  };
  let onDialogChange = () => {
    let text = newMessageElement.current.value;
    props.updateNewDialogText(text);
  };

  if (!props.isAuth) return <Navigate to={"/login"} />;

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}

        <div>
          <textarea
            onChange={onDialogChange}
            ref={newMessageElement}
            value={props.newDialogText}
          ></textarea>
          <div>
            <button className={s.buttonAdd} onClick={OnaddDialog}>
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
