import React from "react";
import s from "./Dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={s.dialog + " " + s.active}>Dimych</div>
        <div className={s.dialog}>Sasha</div>
        <div className={s.dialog}>Artem</div>
        <div className={s.dialog}>Geny</div>
        <div className={s.dialog}>Igor</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are you</div>
        <div className={s.message}>yo</div>
      </div>
    </div>
  );
};

export default Dialogs;
