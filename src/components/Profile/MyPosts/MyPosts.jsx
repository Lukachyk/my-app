import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        <h3> My post</h3>
        <div>
          <div>
            <textarea></textarea>
          </div>
          <button> Add post </button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message=" Hi, how are you" like="3" />
        <Post message=" It's my first post " like="5" />
      </div>
    </div>
  );
};

export default MyPosts;
