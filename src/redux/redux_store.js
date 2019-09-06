import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import friendsReducer from './friends-reducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profileData: profileReducer,
    usersData: usersReducer,
    messagesData: dialogsReducer,
    asideData: asideReducer,
    authData: authReducer,
    friendsData: friendsReducer
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;
