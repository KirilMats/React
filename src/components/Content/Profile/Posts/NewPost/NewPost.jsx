import React from 'react';
import c from './NewPost.module.css';

const NewPost = ({newPostText, dispatch}) => {
  let newPostElement = React.createRef();
  
  let onPostChange = () => {
    let text = newPostElement.current.value;
    dispatch({type: 'UPDATE-NEW-POST-TEXT', text: text});
  }

  let addNewPost = (e) => {
    e.preventDefault();
    dispatch({type: 'ADD-POST'});
  }

  return (
    <div className={c.new_post}>
      <form className={c.newPostForm} action="#" >
        <textarea onChange={onPostChange} value={newPostText} ref={newPostElement} placeholder="Have a news?"></textarea>
        <input onClick={ addNewPost } type="submit" value="Send" />
      </form>
    </div>
  )
}

export default NewPost;