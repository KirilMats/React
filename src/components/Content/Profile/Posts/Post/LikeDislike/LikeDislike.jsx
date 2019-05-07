import React from 'react';
import c from './LikeDislike.module.css';

const LikeDislike = (props) => {
  return (
    <div className={c.like_dislike}>
      <form className={c.like_dislike_form} action="">
        <button className={c.like}><span className={c.like_counter}>{props.likes}</span></button>
        <button className={c.dislike}><span className={c.dislike_counter}>{props.dislikes}</span></button>
      </form>
    </div>
  )
}

export default LikeDislike;