import React from "react";
import "./MyPosts.css";
import Post from "./post/Post";

const MyPosts = (props) => {
  let postData = [
    { id: 1, message: "Hi,how are you", likesCount: 12 },
    { id: 2, message: "its my post", likesCount: 11 },
  ];
  let postElem = props.postData.map((p) => 
    <Post message={p.message} likesCount={p.likesCount} />
  );

  return (
    <div className="s_posts">
      <h3>My MyPosts</h3>
      <div>
        <textarea></textarea>
      </div>
      <div>
        <button>Add Post</button>
      </div>
      <div className="posts">
        <Post
          messages={postData[0].message}
          likesCount={postData[0].likesCount}
        />
        <Post
          messages={postData[1].message}
          likesCount={postData[1].likesCount}
        />
      </div>
    </div>
  );
};
export default MyPosts;
