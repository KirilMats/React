const ADD_POST = 'ADD-POST',
      UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT',
      ADD_LIKE = 'ADD-LIKE',
      ADD_DISLIKE = 'ADD-DISLIKE';


// profileData
const initialState =  { 
    userData: { id: 1, name: 'Fox', dob: 'June 7', city: 'Kyiv', education: 'KNU\'14', website: 'https://www.lorem.ipsum', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' }, 
    postData: [
        { id: 1, likes: 121, dislikes: 14, text: 'And it\'s my second one'},
        { id: 2, likes: 233, dislikes: 32, text: 'It\'s my first post!'}
    ],
    newPostText: ''
}
//

const profileReducer = (state = initialState, action) => {
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
            let addedLikes = action.likes + 1;
            state.postData[action.index].likes = addedLikes;
            return state;
        case ADD_DISLIKE:
            console.log(action.dislikes, state.postData[action.index].dislikes);
            let addedDislikes = action.dislikes + 1;
            state.postData[action.index].dislikes = addedDislikes;
            console.log(action.dislikes, state.postData[action.index].dislikes);
            return state;
        default: return state;
    }
}

//ACTIONS 
export const addPostCreator = () => ({type: ADD_POST}); //ES6 syntax,function body is removed and object ({}) is returned - круглые скобки нужны для обозначения того что это обьект, а не тело функции
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addLikeCreator = (currentLikes, index) => ({type: ADD_LIKE, likes: currentLikes, index: index});
export const addDislikeCreator = (currentDislikes, index) => ({type: ADD_DISLIKE, dislikes: currentDislikes, index: index});

export default profileReducer;