const [ADD_POST, UPDATE_NEW_POST_TEXT, ADD_LIKE, ADD_DISLIKE] = ['ADD-POST', 'UPDATE-NEW-POST-TEXT', 'ADD-LIKE', 'ADD-DISLIKE'];


// usersData
const initialState =  { 
    userMainInfo: [
        { id: 1, name: 'Fox', status: 'wdwef1f2f', location: {city: 'Kyiv', country: 'Ukraine'}, img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' },
        { id: 2, name: 'Cat', status: '1212!f1 fewwef ', location: {city: 'Minsk', country: 'Belarus'}, img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' },
        { id: 3, name: 'Dog', status: '21e 12 21e 21', city: 'Kyiv', location: {city: 'Warsaw', country: 'Poland'}, img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg' } 
    ]
}
//

const usersReducer = (state = initialState, action) => {
    return state;
}

//ACTIONS 

export default usersReducer;