import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
// let postData = [
//   { id: 1, message: "Hi,how are you", likesCount: 12 },
//   { id: 2, message: "its my post", likesCount: 11 },
// ];
const Profile = (props) => {
  return (
    <div className="content">
      <ProfileInfo />
      <MyPosts postData={props.postData} />
    </div>
  );
};
export default Profile;
