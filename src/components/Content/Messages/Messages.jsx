import React from 'react';
import c from './Messages.module.css';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {
  return (
    <div className={c.dialogs}>
      <div className={c.dialog_items}>
        <div className={c.search_bar}>
          <input type="text" placeholder="Search..." />
        </div>
        { props.dialogs }
      </div>
      <div className={c.messages_wrap}>
        <div className={c.message_items}>
          { props.messages }
        </div>
        <NewMessage newMessageBody={props.newMessageBody} sendMessage={props.sendMessage} changeMessage={props.changeMessage} />
      </div>
    </div>
  )
}

export default Messages;