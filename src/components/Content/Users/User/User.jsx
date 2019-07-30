import React from 'react';
import c from './User.module.css';
import {NavLink} from 'react-router-dom';


const User = (props) => {
    let isFollowedDisplay = '';
    props.isFollowed ? isFollowedDisplay = 'Unfollow' : isFollowedDisplay = 'Follow';
    return (
        <div className={c.user_item}>
            <NavLink to={"/profile/" + props.id} className={c.user_frame} activeClassName={c.active}>
                <img src={props.img_src} alt="" width="75" height="75" />
                <span className={c.user_name}>{props.name}</span>
                {/* {props.city}<br /> */}
                {/* {props.country}<br /> */}
                <span className={c.user_status} >{props.status}</span>
            </NavLink>
            <button className={props.isFollowed ? c.unfollow_btn : c.follow_btn} disabled={props.isFollowingFetching.some(id => id === props.id)} type='submit' onClick={() => {props.onFollowSubmit(props.isFollowed, props.id)} }>{isFollowedDisplay}</button><br />
        </div>
    )
}

export default User;