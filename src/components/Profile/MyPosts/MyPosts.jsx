import React from "react";
import s from "./MyPosts.module.css";
import Posts from "./Post/Posts";

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
        <Posts message=" Hi, how are you" reating="3" />
        <Posts message=" It's my first post " reating="5" />
      </div>
    </div>
  );
};

export default MyPosts;
