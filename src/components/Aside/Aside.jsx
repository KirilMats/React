import React from 'react';
import NavBar from './NavBar/NavBar';
import FriendList from './FriendList/FriendList';
import c from './Aside.module.css';

const Aside = ({state}) => {
    const {asideData} = state;
    
    return (
        <aside className={c.aside}>
            <NavBar />
            <FriendList friendData={asideData.friendData} />
        </aside>
    )
}

export default Aside;