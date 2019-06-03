import React from 'react';
import c from './LikeDislike.module.css';

const LikeDislike = ({likes, dislikes, addLike, addDislike}) => {
  let newLike = React.createRef();
  let addNewLike = (e) => {
    e.preventDefault();
    addLike(this);
  }

  return (
    <div className={c.like_dislike}>
      <form className={c.like_dislike_form} action="">
        <button onClick={addNewLike} ref={newLike} className={c.like}><span className={c.like_counter}>{likes}</span></button>
        <button className={c.dislike}><span className={c.dislike_counter}>{dislikes}</span></button>
      </form>
    </div>
  )
}

export default LikeDislike;