import React from "react";
import "./Profile.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className="content">
      <img src="https://adastra.ca/wp-content/uploads/2016/01/horizontal-portada.jpg" />
      <div>ava+ description</div>
      <MyPosts />
    </div>
  );
};
export default Profile;
