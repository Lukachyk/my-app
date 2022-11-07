import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        postData={props.profilePage.postData}
        dispatch={props.dispatch}
        newPostText={props.newPostText}
        // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
