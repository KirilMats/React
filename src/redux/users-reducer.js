const [SUBMIT_FOLLOWING, SET_USERS, SET_CURRENT_PAGE, SET_USERS_TOTAL_COUNT] = ['SUBMIT-FOLLOWING', 'SET-USERS', 'SET-CURRENT-PAGE', 'SET-USERS-TOTAL-COUNT'];


// usersData
const initialState =  { 
    users: [],
    pageSize: 5,
    usersTotalCount: 0,
    currentPage: 1
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
            return {...state, users: action.users}; // 2 arrays collapsing
        case SET_USERS_TOTAL_COUNT:
                return {...state, usersTotalCount: action.usersTotalCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        default: return state;
    }
}

//ACTIONS 
export const submitFollowingAC = (id, isFollowed) => ({type: SUBMIT_FOLLOWING, isFollowed: isFollowed, id});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export const setUsersTotalCountAC = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});

export default usersReducer;