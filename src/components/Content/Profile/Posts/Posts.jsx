import React from 'react';
import NewPost from './NewPost/NewPost';
import Post from './Post/Post';
import c from './Posts.module.css';

const Posts = () => {
  const postData = [
    {likes: '121', dislikes: '14', text: 'And it\'s my second one', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg'},
    {likes: '233', dislikes: '32', text: 'It\'s my first post!', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg'}
  ]

  const posts = postData.map( p => <Post likes={p.likes} dislikes={p.dislikes} post_text={p.text} img_src={p.img_src} />)
  
  return (
    <div className={c.posts}>
      <h2>My posts</h2>
      <NewPost />
      { posts }
    </div>
  )
}

export default Posts;