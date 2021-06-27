import React from "react";
import "./MyPosts.css";
import Post from "./post/Post";

const MyPosts = () => {
  return (
    <div className="s_posts">
      <Post messages = "hi,hpw are you" />
      <Post messages = "fine" />
    </div>
  );
};
export default MyPosts;
