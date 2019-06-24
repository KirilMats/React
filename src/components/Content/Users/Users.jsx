import React from 'react';
import c from './Users.module.css';

const Users = (props) => {
    return (
        <div className={c.users}>
            {props.users}
        </div>
    )
} 

export default Users;