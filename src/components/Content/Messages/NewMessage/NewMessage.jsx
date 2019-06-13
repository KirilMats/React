import React from 'react';
import c from './NewMessage.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../../redux/dialogs-reducer';

const NewMessage = ({newMessageBody, dispatch}) => {
    let onMessageChange = (e) => {
        let text = e.target.value;
        dispatch(updateNewMessageBodyCreator(text));
    }

    let sendMessage = (e) => {
      e.preventDefault();
      dispatch(sendMessageCreator());
    }

    return (
        <div className={c.create_msg}>
          <form className={c.newMsgForm} action="#">
            <input className={c.write_msg} onChange={onMessageChange} value={newMessageBody} type="text" placeholder="Write a message..." />
            <input className={c.send_msg} onClick={ sendMessage } type="submit" value="Send"/>
          </form>  
        </div>
    )
}

export default NewMessage;