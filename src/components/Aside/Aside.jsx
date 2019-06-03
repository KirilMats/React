import React from 'react';
import NavBar from './NavBar/NavBar';
import FriendList from './FriendList/FriendList';
import c from './Aside.module.css';

const Aside = ({state}) => {
    const {friendData} = state.asideData; // friendData = state.asideData.friendData
    
    return (
        <aside className={c.aside}>
            <NavBar />
            <FriendList friendData={friendData} />
        </aside>
    )
}

export default Aside;