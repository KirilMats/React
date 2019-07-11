import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = (props) => {
  const {profileData, changePostText, addNewPost, addLike, addDislike} = props;
  const {postData, userData, newPostText} = profileData;

  const posts = postData.map( (p, index) => <Post key={p.id} index={index} likes={p.likes} dislikes={p.dislikes} post_text={p.text} img_src={userData.img_src} addLike={addLike} addDislike={addDislike} />)
  
  return (
    <div className={c.posts}>
      <h2>My posts</h2>
      <NewPost changePostText={changePostText} addNewPost={addNewPost} newPostText={newPostText} />
      { posts }
    </div>
  )
}

export default Posts;