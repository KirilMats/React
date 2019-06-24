import React from 'react';
import c from './LikeDislike.module.css';

const LikeDislike = ({index, likes, dislikes, addLike, addDislike}) => {
  let addNewLike = (e) => {
    e.preventDefault();
    let currentLikes = likes;
    addLike(currentLikes, index);
  }
  let addNewDislike = (e) => {
    e.preventDefault();
    let currentDislikes = dislikes;
    addDislike(currentDislikes, index);
  }

  return (
    <div className={c.like_dislike}>
      <form className={c.like_dislike_form} action="">
        <button onClick={addNewLike} className={c.like}><span className={c.like_counter}>{likes}</span></button>
        <button onClick={addNewDislike} className={c.dislike}><span className={c.dislike_counter}>{dislikes}</span></button>
      </form>
    </div>
  )
}

export default LikeDislike;