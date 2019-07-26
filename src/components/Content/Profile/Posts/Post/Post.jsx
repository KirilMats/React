import React from 'react';
import LikeDislike from './LikeDislike/LikeDislike';
import c from './Post.module.css';
import defaultUserPhoto from '../../../../../assets/img/default-user.png';

const Post = ({index, likes, dislikes, img_src, post_text, addLike, addDislike}) => {

  return (
    <div className={c.post_item}>
        <LikeDislike index={index} likes={likes} dislikes={dislikes} addLike={addLike} addDislike={addDislike} />
        <img className={c.user_photo} src={img_src ? img_src : defaultUserPhoto} alt="" />
        <div className={c.post_text}>{post_text}</div>
    </div>
  )
}

export default Post;