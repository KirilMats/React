const [SUBMIT_FOLLOWING, SET_USERS, SET_CURRENT_PAGE, SET_USERS_TOTAL_COUNT, SHOW_PRELOADER] = ['SUBMIT-FOLLOWING', 'SET-USERS', 'SET-CURRENT-PAGE', 'SET-USERS-TOTAL-COUNT', 'SHOW-PRELOADER'];


// usersData
const initialState =  { 
    users: [],
    pageSize: 5,
    usersTotalCount: 0,
    currentPage: 1,
    isFetching: true
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
        case SHOW_PRELOADER:
            return {...state, isFetching: action.isFetching};
        default: return state;
    }
}

//ACTIONS 
export const submitFollowing = (id, isFollowed) => ({type: SUBMIT_FOLLOWING, isFollowed: isFollowed, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const showPreloader = (isFetching) => ({type: SHOW_PRELOADER, isFetching});

export default usersReducer;