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
      <img src="#s" className="sidebar-logo" />
      <nav className="sidebar-menu">
        <button type="button">
          <img src="./assets/icon-home.svg" />
          <span>Home</span>
        </button>
        <button type="button" className="has-border">
          <img src="./assets/icon-settings.svg" />
          <span>Settings</span>
        </button>
        <button type="button">
          <img src="./assets/icon-blockchain.svg" />
          <span>Blockchick</span>
        </button>
        <button type="button">
          <img src="./assets/icon-database.svg" />
          <span>DataRiver</span>
        </button>
        <button type="button">
          <img src="./assets/icon-speaker.svg" />
          <span>AudioVibe</span>
        </button>
        <button type="button" className="has-border">
          <img src="./assets/icon-acoustic.svg" />
          <span>SoundBlast</span>
        </button>
        <button type="button">
          <img src="./assets/icon-folders.svg" />
          <span>Folders</span>
        </button>
        <button type="button">
          <img src="./assets/icon-levels.svg" />
          <span>Levels</span>
        </button>
        <button type="button">
          <img src="./assets/icon-accounts.svg" />
          <span>Accounts</span>
        </button>
        <button type="button">
          <img src="./assets/icon-lock.svg" />
          <span>Security</span>
        </button>
      </nav>
    </div>
  );
};
export default Sidebar;
