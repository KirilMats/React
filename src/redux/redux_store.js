import { createStore, combineReducers } from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import asideReducer from "./aside-reducer";

let reducers = combineReducers({
    profileData: profileReducer,
    messagesData: dialogsReducer,
    asideData: asideReducer
});

const store = createStore(reducers);

export default store;

console.log(store.replaceReducer);