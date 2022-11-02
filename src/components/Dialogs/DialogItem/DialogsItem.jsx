import React from "react";
import s from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.dialog + " " + s.active}>
      <img
        className={s.ava}
        src="https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png"
        alt="ava"
      />
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default DialogItem;
