import React from "react";
import s from "./Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  let dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Bodrey" },
    { id: 3, name: "Sergey" },
    { id: 4, name: "Andrey" },
    { id: 5, name: "Igor" },
  ];
  let messagesData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How are youh" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Whats up" },
    { id: 5, message: "Hi" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message} id={dialogsData[0].id} />
        <Message message={messagesData[1].message} id={dialogsData[1].id} />
      </div>
    </div>
  );
};

export default Dialogs;
