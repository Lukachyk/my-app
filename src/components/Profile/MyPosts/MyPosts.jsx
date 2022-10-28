import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi, how are you", like: 3 },
    { id: 2, message: "It's my first post", like: 5 },
  ];
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
        <Post message={postData[0].message} like={postData[0].like} />
        <Post message={postData[1].message} like={postData[1].like} />
      </div>
    </div>
  );
};

export default MyPosts;
