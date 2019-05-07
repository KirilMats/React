import React from 'react';
import c from './NewPost.module.css';

const NewPost = () => {
  return (
    <div className={c.new_post}>
      <form className={c.form} action="" >
        <textarea placeholder="Have a news?"></textarea>
        <input type="submit" value="Send" />
      </form>
    </div>
  )
}

export default NewPost;