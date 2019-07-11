import React from 'react';
import c from './NewMessage.module.css';

const NewMessage = (props) => {
    let onMessageUpdate= (e) => {
        let changedMsgBody = e.target.value;
        props.updateNewMessageBody(changedMsgBody);
    }

    let onMessageSend = (e) => {
      e.preventDefault();
      props.sendMessage();
    }

    return (
        <div className={c.create_msg}>
          <form className={c.newMsgForm} action="#">
            <input className={c.write_msg} onChange={onMessageUpdate} value={props.newMessageBody} type="text" placeholder="Write a message..." />
            <input className={c.send_msg} onClick={ onMessageSend } type="submit" value="Send"/>
          </form>  
        </div>
    )
}

export default NewMessage;