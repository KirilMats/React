import React from 'react';
import c from './User.module.css';
import {NavLink} from 'react-router-dom';

const User = (props) => {
    let isFollowedDisplay = '';
    props.isFollowed === true ? isFollowedDisplay = 'Unfollow' : isFollowedDisplay = 'Follow';
    return (
        <div className={c.user_item}>
            <NavLink to={"profile/" + props.id} className={c.user_frame} activeClassName={c.active}>
                <img src={props.img_src} alt="" width="75" height="75" />
                <span className={c.user_name}>{props.name}</span>
                {/* {props.city}<br /> */}
                {/* {props.country}<br /> */}
                <span className={c.user_status} >{props.status}</span>
            </NavLink>
            <button className={c.follow_btn} type='submit' onClick={() => {props.submitFollowing(props.id, props.isFollowed)} }>{isFollowedDisplay}</button><br />
        </div>
    )
}

export default User;