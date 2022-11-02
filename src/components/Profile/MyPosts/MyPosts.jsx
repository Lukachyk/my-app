import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let elemensPost = props.postData.map((element) => (
    <Post message={element.message} like={element.like} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = "";
  };
  return (
    <div className={s.content}>
      <div>
        <h3> My post</h3>
        <div>
          <div>
            <textarea ref={newPostElement} placeholder="new post"></textarea>
          </div>
          <button onClick={addPost}> Add post </button>
        </div>
      </div>
      <div className={s.posts}>{elemensPost}</div>
    </div>
  );
};

export default MyPosts;
