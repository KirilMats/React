import React from 'react';
import LikeDislike from './LikeDislike/LikeDislike';
import c from './Post.module.css';

const Post = (props) => {
  return (
    <div className={c.post}>
      <div className={c.item}>
        <LikeDislike likes={props.likes} dislikes={props.dislikes} />
        <img className={c.user_photo} src={props.img_src} />
        <div className={c.post_text}>{props.post_text}</div>
      </div>
    </div>
  )
}

export default Post;