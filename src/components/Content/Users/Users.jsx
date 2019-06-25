import React from 'react';
import c from './Users.module.css';
import User from './User/User';

const Users = (props) => {
    return (
        <div className={c.users}>
            {props.users}
        </div>
    )
} 

export default Users;