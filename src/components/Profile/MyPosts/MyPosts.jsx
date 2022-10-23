import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        My post
        <div>
          <textarea></textarea>
          <button> Add post </button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message=" Hi, how are you" reating="3" />
        <Post message=" It's my first post " reating="5" />
      </div>
    </div>
  );
};

export default MyPosts;
