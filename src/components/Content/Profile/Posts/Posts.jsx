import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = ({postData, userData, addPost}) => {
  
  const posts = postData.map( (p, index) => <Post key={index} likes={p.likes} dislikes={p.dislikes} post_text={p.text} img_src={userData.img_src} />)
  
  return (
    <div className={c.posts}>
      <h2>My posts</h2>
      <NewPost addPost={addPost} />
      { posts }
    </div>
  )
}

export default Posts;