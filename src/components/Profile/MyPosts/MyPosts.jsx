import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profile-reduce";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let elemensPost = props.postData.map((element) => (
    <Post message={element.message} like={element.like} />
  ));
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
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
            <button onClick={addPost}> Add post </button>
          </div>
        </div>
        <div className={s.posts}>{elemensPost}</div>
      </div>
    </div>
  );
};

export default MyPosts;
