import React from 'react';
import c from './LikeDislike.module.css';
import { addLikeCreator } from '../../../../../../redux/profile-reducer';

const LikeDislike = ({likes, dislikes, dispatch}) => {
  let addNewLike = (e) => {
    e.preventDefault();
    dispatch(addLikeCreator(likes));
    console.log('likes: ' + likes);
  }
  console.log('likes: ' + likes);
  return (
    <div className={c.like_dislike}>
      <form className={c.like_dislike_form} action="">
        <button onClick={addNewLike} className={c.like}><span className={c.like_counter}>{likes}</span></button>
        <button className={c.dislike}><span className={c.dislike_counter}>{dislikes}</span></button>
      </form>
    </div>
  )
}

export default LikeDislike;