import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = ({profileData, dispatch}) => {
  const {postData, userData, newPostText} = profileData;
  const posts = postData.map( (p, index) => <Post key={index} index={index} likes={p.likes} dislikes={p.dislikes} post_text={p.text} img_src={userData.img_src} dispatch={dispatch} />)
  
  return (
    <div className={c.posts}>
      <h2>My posts</h2>
      <NewPost newPostText={newPostText} dispatch={dispatch} />
      { posts }
    </div>
  )
}

export default Posts;