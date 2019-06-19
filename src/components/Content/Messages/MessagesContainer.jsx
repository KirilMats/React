import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Messages from './Messages';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/dialogs-reducer';

const MessagesContainer = (props) => {
  const {dialogData, messageData, newMessageBody} = props.store.getState().messagesData,
        {dispatch} = props.store.dispatch;
   
  const dialogs = dialogData.map( (d, index) => <Dialog key={index} id={d.id} name ={d.name} img_src={d.img_src} />)
  
  const messages = messageData.map( (m, index) => <Message key={index} img_src={m.img_src} message={m.message} />)

  const sendMessage = () => {
    dispatch(sendMessageCreator());
  }

  const changeMessage = (changedMsgBody) => {
    dispatch(updateNewMessageBodyCreator(changedMsgBody));
  }
  
  return (
    <Messages newMessageBody={newMessageBody} dialogs={dialogs} messages={messages} sendMessage={sendMessage} changeMessage={changeMessage}/>
  )
}

export default MessagesContainer;