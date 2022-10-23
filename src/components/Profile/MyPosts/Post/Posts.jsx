import React from "react";
import s from "./Posts.module.css";

const Posts = () => {
  return (
    <div className={s.item}>
      <img src="https://w7.pngwing.com/pngs/529/832/png-transparent-computer-icons-avatar-user-profile-avatar-thumbnail.png" />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Posts;
