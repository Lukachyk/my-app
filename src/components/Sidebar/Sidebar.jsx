import React from "react";
import s from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={s.sidebar}>
      <button
        type="button"
        className="sidebar-burger"
        onclick="toggleSidebar()"
      ></button>
      <nav className="sidebar-menu">
        <button type="button">
          <img src="./assets/icon-home.svg" alt="icon" />
          <a href="/profile">Home</a>
        </button>
        <button type="button" className="has-border">
          <span>Settings</span>
        </button>

        <button type="button">
          <a href="/dialogs">Blockchick</a>
        </button>
      </nav>
    </div>
  );
};
export default Sidebar;
