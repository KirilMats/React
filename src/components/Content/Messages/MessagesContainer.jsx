import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Messages from './Messages';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/dialogs-reducer';
import StoreContext from '../../../StoreContext';

const MessagesContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          const {dialogData, messageData, newMessageBody} = store.getState().messagesData,
          dispatch = store.dispatch;
   
          const dialogs = dialogData.map( (d, index) => <Dialog key={index} id={d.id} name ={d.name} img_src={d.img_src} />)
          
          const messages = messageData.map( (m, index) => <Message key={index} img_src={m.img_src} message={m.message} />)

          const sendMessage = () => {
            dispatch(sendMessageCreator());
          }

          const changeMessage = (changedMsgBody) => {
            dispatch(updateNewMessageBodyCreator(changedMsgBody));
          }
          return <Messages newMessageBody={newMessageBody} dialogs={dialogs} messages={messages} sendMessage={sendMessage} changeMessage={changeMessage}/>
        }
      }
      </StoreContext.Consumer>
  )
}

export default MessagesContainer;