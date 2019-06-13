import React from 'react';
import c from './NewPost.module.css';
import { updateNewPostTextCreator, addPostCreator } from '../../../../../redux/profile-reducer';

const NewPost = ({newPostText, dispatch}) => {
  let onPostChange = (e) => {
    let text = e.target.value;
    dispatch(updateNewPostTextCreator(text));
  }

  let addNewPost = (e) => {
    e.preventDefault();
    dispatch(addPostCreator());
  }

  return (
    <div className={c.new_post}>
      <form className={c.newPostForm} action="#" >
        <textarea onChange={onPostChange} value={newPostText} placeholder="Have a news?"></textarea>
        <input onClick={ addNewPost } type="submit" value="Add" />
      </form>
    </div>
  )
}

export default NewPost;