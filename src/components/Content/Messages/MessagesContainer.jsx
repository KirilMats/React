import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import Messages from './Messages';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../../redux/dialogs-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    newMessageBody: state.messagesData.newMessageBody,
    dialogs: state.messagesData.dialogData.map( (d) => <Dialog key={d.id} id={d.id} name ={d.name} img_src={d.img_src} />),      
    messages:  state.messagesData.messageData.map( (m) => <Message key={m.id} img_src={m.img_src} message={m.message} />)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageCreator());
    },
    changeMessage: (changedMsgBody) => {
      dispatch(updateNewMessageBodyCreator(changedMsgBody));
    }
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;

// const MessagesContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         store => {
//           const {dialogData, messageData, newMessageBody} = store.getState().messagesData,
//           dispatch = store.dispatch;
   
//           const dialogs = dialogData.map( (d, index) => <Dialog key={index} id={d.id} name ={d.name} img_src={d.img_src} />)
          
//           const messages = messageData.map( (m, index) => <Message key={index} img_src={m.img_src} message={m.message} />)

//           const sendMessage = () => {
//             dispatch(sendMessageCreator());
//           }

//           const changeMessage = (changedMsgBody) => {
//             dispatch(updateNewMessageBodyCreator(changedMsgBody));
//           }
//           return <Messages newMessageBody={newMessageBody} dialogs={dialogs} messages={messages} sendMessage={sendMessage} changeMessage={changeMessage}/>
//         }
//       }
//       </StoreContext.Consumer>
//   )
// }