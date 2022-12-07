import React from "react";
import s from "./ProfileInfo.module.css";
import userPhoto from "./../../../assets/images/user_icon.png";
const ProfileInfo = (props) => {
  debugger;
  return (
    <div>
      <div className={s.main_img}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsKjXisU4M4s8U2kgtmGhk-_KDrQCLiyJQCZUYuLM&s"
          alt="bank"
        ></img>
      </div>
      <div className={s.ava}>
        <img
          src={
            props.profile.photos.large != null
              ? props.profile.photos.large
              : userPhoto
          }
        />
        ava+content
      </div>
    </div>
  );
};

export default ProfileInfo;
