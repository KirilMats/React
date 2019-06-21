import React from 'react';
import NavBar from './NavBar/NavBar';
import FriendList from './FriendList/FriendList';
import c from './Aside.module.css';
import store from './../../redux/redux_store';

const Aside = () => {
    const {friendData} = store.getState().asideData; // friendData = state.asideData.friendData
    
    return (
        <aside className={c.aside}>
            <NavBar />
            <FriendList friendData={friendData} />
        </aside>
    )
}

export default Aside;