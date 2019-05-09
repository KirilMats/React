import React from 'react';
import c from './Friend.module.css';

const Friend = (props) => {
    return (
        <div className={c.friend}>
            <img src={props.img_src} alt={props.name} />
            <div className={c.name}>{props.name}</div>        
        </div>
    )
}

export default Friend;