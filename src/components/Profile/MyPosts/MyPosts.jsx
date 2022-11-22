import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let elemensPost = props.postData.map((element) => (
    <Post message={element.message} key={element.id} like={element.like} />
  ));
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div className={s.content}>
      <div>
        <h3> My post</h3>
        <div>
          <div>
            <textarea
              onChange={onPostChange}
              ref={newPostElement}
              value={props.newPostText}
            />
            <button onClick={onAddPost}> Add post </button>
          </div>
        </div>
        <div className={s.posts}>{elemensPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
