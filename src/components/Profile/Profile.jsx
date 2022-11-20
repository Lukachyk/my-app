import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import MyPostsContainer from "./MyPosts/MyPostsContainer.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer
        store={props.store}

        // updateNewPostText={props.updateNewPostText}
      />
    </div>
  );
};

export default Profile;
