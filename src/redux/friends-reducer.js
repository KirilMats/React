import {friendsAPI} from '../api/api';

const [TOGGLE_IS_FETCHING, SET_FRIENDS] = ['TOGGLE-IS-FETCHING', 'SET-FRIENDS']; 

const initialState = {
    isFetching: true,
    friends: []
}

const friendsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FRIENDS:
            return {...state, friends: action.friends}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
    }

    return state;
}

export const showPreloader = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const setFriends = (friends) => ({type: SET_FRIENDS, friends});

export const getFriends = () => (dispatch) => {
    dispatch(showPreloader(true));
    friendsAPI.getFriends().then(data => {
        dispatch(showPreloader(false));
        dispatch(setFriends(data.items));
    });
}

export default friendsReducer;