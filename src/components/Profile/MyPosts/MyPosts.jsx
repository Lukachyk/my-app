import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Field, reduxForm } from "redux-form";
import {
  required,
  maxLenghtCreator,
} from "../../../utils/validators/validators";
import { Textare } from "../../common/preloader/FormsControls/FormsControls";

const MyPosts = (props) => {
  let elemensPost = props.postData.map((element) => (
    <Post message={element.message} key={element.id} like={element.like} />
  ));

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };
  return (
    <div className={s.content}>
      <div>
        <h3> My post</h3>
        <AddNewPostFromRedux onSubmint={onAddPost} />
        <div className={s.posts}>{elemensPost}</div>
      </div>
    </div>
  );
};
const maxLenght5 = maxLenghtCreator(5);
let AddNewPostFrom = (props) => {
  return (
    <form onSubmint={props.handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textare}
          placeholder="new text"
          validate={[required, maxLenght5]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

let AddNewPostFromRedux = reduxForm({ form: "ProfileAddNewPostFrom" })(
  AddNewPostFrom
);

export default MyPosts;
