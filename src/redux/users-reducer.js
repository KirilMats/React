import {usersAPI} from '../api/api';

const [SUBMIT_FOLLOWING, SET_USERS, SET_CURRENT_PAGE, SET_USERS_TOTAL_COUNT, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_FETCHING] = ['SUBMIT-FOLLOWING', 'SET-USERS', 'SET-CURRENT-PAGE', 'SET-USERS-TOTAL-COUNT', 'TOGGLE-IS-FETCHING', 'TOGGLE-IS-FOLLOWING-FETCHING'];

// usersData
const initialState =  { 
    users: [],
    pageSize: 5,
    usersTotalCount: 0,
    currentPage: 1,
    isFetching: true,
    isFollowingFetching: []
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
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_FETCHING:
            return {...state, isFollowingFetching: action.isFollowingFetching ? [...state.isFollowingFetching, action.userId] : state.isFollowingFetching.filter(id => id != action.userId) };
        default: return state;
    }
}

//ACTIONS 
export const submitFollowing = (id, isFollowed) => ({type: SUBMIT_FOLLOWING, isFollowed, id});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setUsersTotalCount = (usersTotalCount) => ({type: SET_USERS_TOTAL_COUNT, usersTotalCount});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const showPreloader = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const showFollowingPreloader = (isFollowingFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_FETCHING, isFollowingFetching, userId});


export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(showPreloader(true));
    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(showPreloader(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    });
}

export const changeFollowing = (isFollowed, id) => (dispatch) => {
    dispatch(showFollowingPreloader(true, id));
    isFollowed ?
    usersAPI.changeFollowing(isFollowed, id).then(data => {
        dispatch(showFollowingPreloader(false, id));
        return data.resultCode == 0 && dispatch(submitFollowing(id, true));
    })   
    :
    usersAPI.changeFollowing(isFollowed, id).then(data => {
        dispatch(showFollowingPreloader(false, id));
        return data.resultCode == 0 && dispatch(submitFollowing(id, false));
    })
}

export default usersReducer;