import React from 'react';
import c from './Message.module.css';

const Message = (props) => {
  return (
    <div className={c.message}>
      <img src={props.img_src} alt="photo"/>
      <div className={c.message_container}>
        {props.message}     
      </div>
    </div>
  )
}

export default Message;