import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogsItem";

const Dialogs = (props) => {
  // let dialogsData = [
  //   { id: 1, name: "Dimych" },
  //   { id: 2, name: "Bodrey" },
  //   { id: 3, name: "Sergey" },
  //   { id: 4, name: "Andrey" },
  //   { id: 5, name: "Igor" },
  // ];
  // let messagesData = [
  //   { id: 1, message: "Hi" },
  //   { id: 2, message: "How are you" },
  //   { id: 3, message: "Yo" },
  //   { id: 4, message: "Whats up" },
  //   { id: 5, message: "Hi" },
  // ];

  let dialogsElements = props.state.dialogsData.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));

  let messagesElements = props.state.messagesData.map((message) => (
    <Message message={message.message} id={message.id} />
  ));

  let newMessageElement = React.createRef();
  let addMessage = () => {
    let text = newMessageElement.current.value;
    alert(text);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>{dialogsElements}</div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <textarea
            ref={newMessageElement}
            placeholder="add message"
          ></textarea>
          <div>
            <button className={s.buttonAdd} onClick={addMessage}>
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
