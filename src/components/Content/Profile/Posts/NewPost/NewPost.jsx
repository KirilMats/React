import React from 'react';
import c from './NewPost.module.css';

const NewPost = ({newPostText, postChange, addNewPost}) => {
  let onPostChange = (e) => {
    let text = e.target.value;
    postChange(text);
  }

  let onAddNewPost = (e) => {
    e.preventDefault();
    addNewPost();
  }

  return (
    <div className={c.new_post}>
      <form className={c.newPostForm} action="#" >
        <textarea onChange={onPostChange} value={newPostText} placeholder="Have a news?"></textarea>
        <input onClick={onAddNewPost} type="submit" value="Add" />
      </form>
    </div>
  )
}

export default NewPost;