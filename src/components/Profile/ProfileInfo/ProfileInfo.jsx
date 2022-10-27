import React from "react";
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={s.main_img}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNsKjXisU4M4s8U2kgtmGhk-_KDrQCLiyJQCZUYuLM&s"
          alt="bank"
        ></img>
      </div>
      <div className={s.ava}>ava+content</div>
    </div>
  );
};

export default ProfileInfo;
