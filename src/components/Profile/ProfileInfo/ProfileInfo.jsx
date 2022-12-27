import React from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWhitHooks";
import userPhoto from "./../../../assets/images/user_icon.png";

const ProfileInfo = ({ profile, status, updateStatus }) => {
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
          src={profile.photos.large != null ? profile.photos.large : userPhoto}
        />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      </div>
    </div>
  );
};

export default ProfileInfo;
