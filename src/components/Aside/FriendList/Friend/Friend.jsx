import React from 'react';
import c from './Friend.module.css';
import {NavLink} from 'react-router-dom';

const Friend = (props) => {
    const {img_src, name} = props;
    return (
        <NavLink to={"/profile/" + props.id}>
            <div className={c.friend}>
                <img src={img_src} alt={name} />
                <div className={c.name}>{name}</div>        
            </div>
        </NavLink>
    )
}

export default Friend;