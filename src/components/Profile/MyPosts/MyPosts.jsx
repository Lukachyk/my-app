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
      <div>
        <Posts />
      </div>
    </div>
  );
};

export default MyPosts;
