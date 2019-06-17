const [UPDATE_NEW_MESSAGE_BODY, SEND_MESSAGE] = ['UPDATE-NEW-MESSAGE-BODY', 'SEND-MESSAGE'];

// MessagesData
const initialState = {       
    dialogData: [
        { id: 1, name: 'Jon', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
        { id: 2, name: 'Sansa', img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp' },
        { id: 3, name: 'Cersei', img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg' },
        { id: 4, name: 'Daenerys', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' },
        { id: 5, name: 'Jaime', img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png' }
    ], 
    messageData: [
        { id: 1, message: 'How many dragons do you still have?', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg*' },
        { id: 3, message: 'Poor you...', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg*' },
        { id: 5, message: 'Yeah...That is really uplifting...', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' }
    ],
    newMessageBody: ''
}
//

const dialogsReducer = (state = initialState, action) => {
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
export const updateNewMessageBodyCreator = (changedMsgBody) => ({type: UPDATE_NEW_MESSAGE_BODY, newMsgBody: changedMsgBody});
export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export default dialogsReducer;