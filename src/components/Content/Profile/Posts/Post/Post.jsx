import React from 'react';
import LikeDislike from './LikeDislike/LikeDislike';
import c from './Post.module.css';

const Post = ({likes, dislikes, img_src, post_text, dispatch}) => {
  return (
    <div className={c.post}>
      <div className={c.item}>
        <LikeDislike likes={likes} dislikes={dislikes} dispatch={dispatch} />
        <img className={c.user_photo} src={img_src} />
        <div className={c.post_text}>{post_text}</div>
      </div>
    </div>
  )
}

export default Post;