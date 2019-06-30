import React from 'react';
import c from './User.module.css';

const User = (props) => {
    let isFollowedDisplay = '';
    props.isFollowed === true ? isFollowedDisplay = 'Unfollow' : isFollowedDisplay = 'Follow';
    return (
        <div className={c.user_item}>
            User<br />
            <button type='submit' onClick={() => {props.submitFollowing(props.id, props.isFollowed)} }>{isFollowedDisplay}</button><br />
            {props.name}<br />
            {/* {props.city}<br /> */}
            {/* {props.country}<br /> */}
            {props.status}<br />
            <img src={props.img_src} alt="" width="75" height="75" /><br /><br />
        </div>
    )
}

export default User;