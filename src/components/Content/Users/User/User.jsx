import React from 'react';
import c from './User.module.css';

const User = (props) => {
    return (
        <div className={c.user_item}>
            User<br />
            {props.isFollowed === true ? <button type='submit' onClick={() => props.submitUnfollowing(props.id)}>Unfollow</button> : <button type='submit' onClick={() => props.submitFollowing(props.id)}>Follow</button>}<br />
            {props.name}<br />
            {props.city}<br />
            {props.country}<br />
            {props.status}<br />
            <img src={props.img_src} width="50" height="50" /><br /><br />
        </div>
    )
}

export default User;