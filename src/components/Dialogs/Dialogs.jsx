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
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Dimych" id="1" />
        <DialogItem name="Bodrey" id="2" />
        <DialogItem name="Sergey" id="3" />
        <DialogItem name="Andrey" id="4" />
        <DialogItem name="Igor" id="5" />
      </div>
      <div className={s.messages}>
        <Message message="Hi" />
        <Message message="How are you" />
        <Message message="Yo" />
        <Message message="Whats up " />
        <Message message="Hi" />
      </div>
    </div>
  );
};

export default Dialogs;
