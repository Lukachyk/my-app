import React from "react";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";
import {
  addDialogActionCreator,
  updateNewDialogText,
} from "../../redux/dialogs-reduce";

const Dialogs = (props) => {
  let dialogsElements = props.dialogsPage.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.dialogsPage.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageElement = React.createRef();

  let addDialog = () => {
    props.dispatch(addDialogActionCreator());
  };
  let onDialogChange = () => {
    let text = newMessageElement.current.value;
    let action = updateNewDialogText(text);
    props.dispatch(action);
  };

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}

        <div>
          <textarea
            onChange={onDialogChange}
            ref={newMessageElement}
            value={props.dialogsPage.newDialogText}
          ></textarea>
          <div>
            <button className={s.buttonAdd} onClick={addDialog}>
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
