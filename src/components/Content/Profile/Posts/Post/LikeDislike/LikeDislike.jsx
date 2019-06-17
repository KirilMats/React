import React from 'react';
import c from './LikeDislike.module.css';
import { addLikeCreator, addDislikeCreator } from '../../../../../../redux/profile-reducer';

const LikeDislike = ({index, likes, dislikes, dispatch}) => {
  let addNewLike = (e) => {
    e.preventDefault();
    let currentLikes = likes;
    dispatch(addLikeCreator(currentLikes, index));
  }
  let addNewDislike = (e) => {
    e.preventDefault();
    let currentDislikes = dislikes;
    dispatch(addDislikeCreator(currentDislikes, index));
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