import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";

const store = {
    _state: {
        profileData: { 
            userData: { id: 1, name: 'Fox', dob: 'June 7', city: 'Kyiv', education: 'KNU\'14', website: 'https://www.lorem.ipsum', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' }, 
            postData: [
                { id: 1, likes: 121, dislikes: 14, text: 'And it\'s my second one'},
                { id: 2, likes: 233, dislikes: 32, text: 'It\'s my first post!'}
            ],
            newPostText: ''
        },
        messagesData: {       
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
        },
        asideData: {
            friendData: [
                { id: 1, name: 'Sansa', img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp'},
                { id: 2, name: 'Cersei', img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg'},
                { id: 3, name: 'Jaime', img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png'}
            ]
        }
    },
    getState() {
       return this._state; 
    },
    _callSubscriber() {

    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profileData = profileReducer(this._state.profileData, action);
        this._state.messagesData = dialogsReducer(this._state.messagesData, action);
        this._state.asideData = asideReducer(this._state.asideData, action);
        this._callSubscriber(this._state);
    }
}

export default store;

// const dialogData = [
//     { id: 1, name: 'Jon', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
//     { id: 2, name: 'Sansa', img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp' },
//     { id: 3, name: 'Cersei', img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg' },
//     { id: 4, name: 'Daenerys', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' },
//     { id: 5, name: 'Jaime', img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png' }
// ];

// const messageData = [
//     { id: 1, message: 'How many dragons you still have?', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
//     { id: 2, message: 'I am afraid to say, but only two of them still alive.', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' },
//     { id: 3, message: 'Poor you...', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
//     { id: 4, message: 'At least you still have me...', img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
//     { id: 5, message: 'Yeah...That is really uplifting...', img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' }
// ];

// const userData = { id: 1, name: 'Fox', dob: 'June 7', city: 'Kyiv', education: 'KNU\'14', website: 'https://www.lorem.ipsum', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' };

// const postData = [
//     { id: 1, likes: 121, dislikes: 14, text: 'And it\'s my second one'},
//     { id: 2, likes: 233, dislikes: 32, text: 'It\'s my first post!'}
// ];

// const friendData = [
//     { id: 1, name: 'Sansa', img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp'},
//     { id: 2, name: 'Cersei', img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg'},
//     { id: 3, name: 'Jaime', img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png'}
// ];

// let rerenderEntireTree = null;

// export const updateNewPostText = (newText) => {
//   this.state.profileData.newPostText = newText;
//   rerenderEntireTree(this.state, addPost, updateNewPostText, addLike, addDislike);
// }

// export const addPost = () => {
//     let newPost = {
//        id: postData.length == 0 ? 1 : postData[postData.length - 1].id + 1,
//        likes: 0,
//        dislikes: 0,
//        text: this.state.profileData.newPostText
//     }
//     this.state.profileData.postData.push(newPost);
//     updateNewPostText('');
//     rerenderEntireTree(this.state, addPost, updateNewPostText, addLike, addDislike);
// }

// export const addLike = () => {
//   this.state.profileData.postData.likes++;
//   debugger;
//   rerenderEntireTree(this.state, addPost, updateNewPostText, addLike, addDislike);
// }

// export const addDislike = () => {
  
// }

// export const subscribe = (observer) => {
//     rerenderEntireTree = observer;
// }