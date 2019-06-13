const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY',
    SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMsgBody;
            return state;
        case SEND_MESSAGE:
            const messageData = state.messageData;
            let newMessage = {
                id: messageData.length == 0 ? 1 : messageData[messageData.length - 1].id + 1,
                message: state.newMessageBody,
                img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg*'
            }
            messageData.push(newMessage);
            state.newMessageBody = '';
            return state;
        default: return state;
    }
}

//ACTIONS
export const updateNewMessageBodyCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, newMsgBody: text});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;