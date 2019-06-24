import React from 'react';
import c from './User.module.css';

const User = (props) => {
    console.log(props);
    return (
        <div className={c.user_item}>
            User
            {props.name}
            {props.city}
            {props.country}
            {props.status}
            <img src={props.img_src} width="50" />
        </div>
    )
}

export default User;