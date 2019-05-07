import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
  return (
    <div className={c.posts}>
      <h2>My posts</h2>
      <NewPost />
      <Post likes="121" dislikes="14" post_text={'And it\'s my second one'} img_src='https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' />
      <Post likes="233" dislikes="32" post_text={'It\'s my first post!'} img_src='https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' />
    </div>
  )
}

export default Posts;