import React from 'react';
import c from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';

const Messages = (props) => {
  const {dialogData, messageData, newMessageBody} = props.store.getState().messagesData;
  
  const dialogs = dialogData.map( (d, index) => <Dialog key={index} id={d.id} name ={d.name} img_src={d.img_src} />)
  
  const messages = messageData.map( (m, index) => <Message key={index} img_src={m.img_src} message={m.message} />)

  return (
    <div className={c.dialogs}>
      <div className={c.dialog_items}>
        <div className={c.search_bar}>
          <input type="text" placeholder="Search..." />
        </div>
        { dialogs }
      </div>
      <div className={c.messages_wrap}>
        <div className={c.message_items}>
          { messages }
        </div>
        <NewMessage newMessageBody={newMessageBody} dispatch={props.store.dispatch} />
      </div>
    </div>
  )
}

export default Messages;