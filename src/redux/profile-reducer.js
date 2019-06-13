const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      ADD_LIKE = 'ADD-LIKE';

const profileReducer = (state, action) => {
    switch(action.type){
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        case ADD_POST:
            const postData = state.postData;
            let newPost = {
            id: postData.length == 0 ? 1 : postData[postData.length - 1].id + 1,
            likes: 0,
            dislikes: 0,
            text: state.newPostText
            }
            postData.push(newPost);
            state.newPostText = '';
            return state; 
        case ADD_LIKE:
            console.log(action.likes);
            action.likes++;
            console.log(action.likes);
            console.log(action.likes);
        default: return state;
    }
}

//ACTIONS 
export const addPostCreator = () => ({type: ADD_POST}); //ES6 syntax,function body is removed and object ({}) is returned - круглые скобки нужны для обозначения того что это обьект, а не тело функции
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addLikeCreator = (likes) => ({type: ADD_LIKE, likes: likes});

export default profileReducer;