const [SUBMIT_FOLLOWING, SET_USERS] = ['SUBMIT-FOLLOWING', 'SET-USERS'];


// usersData
const initialState =  { 
    users: []
}
//

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_FOLLOWING:
            return {
                ...state,
                users: [...state.users].map( (u) => {
                    if(u.id === action.id) {
                        return action.isFollowed === true ? {...u, followed: false} : {...u, followed: true}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}; // 2 arrays collapsing
        default: return state;
    }
}

//ACTIONS 
export const submitFollowingAC = (id, isFollowed) => ({type: SUBMIT_FOLLOWING, isFollowed: isFollowed, id: id});
export const setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;