import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="hi, whatup?" likeCounter="like*20"/>
        <Post message="qwerty" likeCounter="like*15"/> 
       
      </div>
    </div>
  );
};

export default MyPosts;
