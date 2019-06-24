const [ADD_POST, UPDATE_NEW_POST_TEXT, ADD_LIKE, ADD_DISLIKE] = ['ADD-POST', 'UPDATE-NEW-POST-TEXT', 'ADD-LIKE', 'ADD-DISLIKE'];


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
            return {
                ...state, 
                newPostText: action.newText
            }
        case ADD_POST:
            console.log(state.postData);
            return {
                ...state, 
                newPostText: '', 
                postData: [...state.postData, {id: state.postData.length == 0 ? 1 : state.postData[state.postData.length - 1].id + 1, likes: 0, dislikes: 0, text: state.newPostText}] 
            }
        case ADD_LIKE:{
            let stateCopy = {...state};
                stateCopy.postData = [...state.postData];
            let addedLikes = action.likes + 1;
            stateCopy.postData[action.index].likes = addedLikes;
            return stateCopy;
        }
        case ADD_DISLIKE:{
            let stateCopy = {...state};
                stateCopy.postData = [...state.postData];
            let addedDislikes = action.dislikes + 1;
            stateCopy.postData[action.index].dislikes = addedDislikes;
            return stateCopy;
        }
        default: return state;
    }
}

//ACTIONS 
export const addPostCreator = () => ({type: ADD_POST}); //ES6 syntax,function body is removed and object ({}) is returned - круглые скобки нужны для обозначения того что это обьект, а не тело функции
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const addLikeCreator = (currentLikes, index) => ({type: ADD_LIKE, likes: currentLikes, index: index});
export const addDislikeCreator = (currentDislikes, index) => ({type: ADD_DISLIKE, dislikes: currentDislikes, index: index});

export default profileReducer;