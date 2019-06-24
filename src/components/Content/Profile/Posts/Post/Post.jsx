import React from 'react';
import LikeDislike from './LikeDislike/LikeDislike';
import c from './Post.module.css';

const Post = ({index, likes, dislikes, img_src, post_text, dispatch, addLike, addDislike}) => {
  return (
<<<<<<< HEAD
    <div className={c.post_item}>
=======
    <div className={c.post}>
      <div className={c.item}>
>>>>>>> 24e2f29ffa1b956c6d681ee70d6e5fe7e38dc34c
        <LikeDislike index={index} likes={likes} dislikes={dislikes} dispatch={dispatch} addLike={addLike} addDislike={addDislike} />
        <img className={c.user_photo} src={img_src} />
        <div className={c.post_text}>{post_text}</div>
    </div>
  )
}

export default Post;