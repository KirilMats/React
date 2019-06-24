import React from 'react';
import LikeDislike from './LikeDislike/LikeDislike';
import c from './Post.module.css';

const Post = ({index, likes, dislikes, img_src, post_text, dispatch, addLike, addDislike}) => {
  return (
    <div className={c.post_item}>
        <LikeDislike index={index} likes={likes} dislikes={dislikes} dispatch={dispatch} addLike={addLike} addDislike={addDislike} />
        <img className={c.user_photo} src={img_src} />
        <div className={c.post_text}>{post_text}</div>
    </div>
  )
}

export default Post;