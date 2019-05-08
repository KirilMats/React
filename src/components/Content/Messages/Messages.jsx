import React from 'react';
import c from './Messages.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';

const Messages = ({dialogData, messageData}) => {
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
      <div className={c.message_items}>
        { messages }
        <div className={c.create_msg}>
          <input className={c.write_msg} type="text" placeholder="Write a message..." />
          <input className={c.send_msg} type="submit" value="Send"/>
        </div>   
      </div>
    </div>
  )
}

export default Messages;