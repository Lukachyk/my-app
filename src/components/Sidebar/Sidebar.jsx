import React from "react";
import s from "./Sidebar.module.css";
import { NavLink } from "react-router-dom";
import DialogItem from "../Dialogs/DialogItem/DialogsItem";

const Sidebar = (props) => {
  return (
    <div className={s.sidebar}>
      <div>
        <NavLink
          to="/profile"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/dialogs"
          className={(navData) => (navData.isActive ? s.active : s.item)}
        >
          Blockchick
        </NavLink>
      </div>
      <div className={s.friends}>
        <h3>Friends</h3>
        <div className={s.friendsAva}>
          <DialogItem />
          <DialogItem />
          <DialogItem />
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
