import * as serviceWorker from './serviceWorker';
import state, { updateNewPostText, addLike, addDislike } from './redux/state';
import {addPost} from './redux/state';
import rerenderEntireTree from './render'; 

rerenderEntireTree(state, addPost, updateNewPostText, addLike, addDislike);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
