import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert("rerer");
  };
  let onChange = (e) => {
    alert(e.target.value)
  }

  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likeCounter={p.likeCounter} />
  ));
  return (
    <div className={s.MyPostContainer}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea onChange={onChange} ref={newPostElement}></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
};

export default MyPosts;
