import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    usersData: usersReducer,
    messagesData: dialogsReducer,
    asideData: asideReducer,
    authData: authReducer
});

const store = createStore(reducers);

window.store = store;

export default store;
