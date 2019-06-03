import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = ({postData, userData, addPost, newPostText, updateNewPostText, addLike, addDislike}) => {
  
  const posts = postData.map( (p, index) => <Post key={index} likes={p.likes} dislikes={p.dislikes} post_text={p.text} img_src={userData.img_src} addLike={addLike} addDislike={addDislike} />)
  
  return (
    <div className={c.posts}>
      <h2>My posts</h2>
      <NewPost newPostText={newPostText} addPost={addPost}  updateNewPostText={updateNewPostText} />
      { posts }
    </div>
  )
}

export default Posts;