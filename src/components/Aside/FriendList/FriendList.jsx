import React from 'react';
import Friend from './Friend/Friend';
import c from './FriendList.module.css';
import {NavLink} from 'react-router-dom';

const FriendList = ({friendData}) => {

    const friends = friendData.map( (f, index) => <Friend key={index} img_src={f.img_src} name={f.name} />);

    return (
        <div className={c.friendList}>
            <div className={c.item}>
                <NavLink to="/friends" activeClassName={c.active}>Friends</NavLink>
            </div>
            <div className={c.friends}>
                { friends }
            </div>
        </div>
    )
}
export default FriendList;