import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <div className={s.content}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsKjXisU4M4s8U2kgtmGhk-_KDrQCLiyJQCZUYuLM&s"
          alt="content-logo"
        ></img>
      </div>
      <div className={s.ava}>ava+content</div>
      <div>
        <MyPosts />
      </div>
    </div>
  );
};

export default Profile;
