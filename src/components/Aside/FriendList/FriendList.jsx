import React from 'react';
import Friend from './Friend/Friend';
import c from './FriendList.module.css';
import {NavLink} from 'react-router-dom';
import defaultUserPhoto from '../../../assets/img/default-user.png';

const FriendList = (props) => {
    const friends = props.friends.map( (f, index) => f.followed && <Friend key={index} img_src={f.photos.small != null ? f.photos.small : defaultUserPhoto} name={f.name} isFollowed={f.followed} id={f.id} />);

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