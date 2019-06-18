import React from 'react';
import c from './Friend.module.css';

const Friend = (props) => {
    const {img_src, name} = props;
    return (
        <div className={c.friend}>
            <img src={img_src} alt={name} />
            <div className={c.name}>{name}</div>        
        </div>
    )
}

export default Friend;