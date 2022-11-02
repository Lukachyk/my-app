import React from "react";
import MyPosts from "./MyPosts/MyPosts.jsx";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";

const Profile = (props) => {
  // let postData = [
  //   { id: 1, message: "Hi, how are you", like: 3 },
  //   { id: 2, message: "It's my first post", like: 5 },
  // ];
  return (
    <div>
      <ProfileInfo />
      <MyPosts postData={props.state.postData} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
