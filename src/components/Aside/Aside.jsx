import React from 'react';
import NavBar from './NavBar/NavBar';
import FriendContainer from './FriendList/FriendsContainer';
import c from './Aside.module.css';

const Aside = () => {
    
    return (
        <aside className={c.aside}>
            <NavBar />
            <FriendContainer />
        </aside>
    )
}

export default Aside;