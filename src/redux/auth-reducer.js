const [SET_USER_AUTH_DATA, SHOW_PRELOADER] = ['SET-USER-AUTH-DATA', 'SHOW-PRELOADER'];

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    fullName: null,
    contacts: null,
    isFetching: true
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_AUTH_DATA:
            return {...state, ...action.authData, isAuth: true}
        case SHOW_PRELOADER:
                return {...state, isFetching: action.isFetching};
        default: return state
    }
}

export const setUserAuthData = (userId, login, email, photos, fullName, contacts) => ({type: SET_USER_AUTH_DATA, authData: {userId, login, email, photos, fullName, contacts}});
export const showPreloader = (isFetching) => ({type: SHOW_PRELOADER, isFetching});

export default authReducer;