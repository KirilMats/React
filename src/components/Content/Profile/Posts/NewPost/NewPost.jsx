import React from 'react';
import c from './NewPost.module.css';

const NewPost = ({addPost}) => {
  let newPostElement = React.createRef();

  let addNewPost = (e) => {
    e.preventDefault();
    let text = newPostElement.current.value;
    
    addPost(text);

    newPostElement.current.value = '';
  }

  return (
    <div className={c.new_post}>
      <form className={c.newPostForm} action="#" >
        <textarea ref={newPostElement} placeholder="Have a news?"></textarea>
        <input onClick={ addNewPost } type="submit" value="Send" />
      </form>
    </div>
  )
}

export default NewPost;