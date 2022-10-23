import React from "react";
import s from "./Posts.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src="https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png" />
      {props.message}
      <div>
        <span>Like {props.reating}</span>
      </div>
    </div>
  );
};

export default Posts;
