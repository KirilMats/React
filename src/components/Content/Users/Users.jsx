import React from 'react';
import c from './Users.module.css';
import User from './User/User';
import defaultUserPhoto from '../../../assets/img/default-user.png';

const Users = (props) => {
    let pagesCount = Math.ceil(props.usersTotalCount / props.pageSize);
        
    let pages = [];

    for(let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    return (
        <div className={c.users}>
            <div className={c.pages}>
                {
                    pages.map( p => <span onClick={(e) => {props.onPageChange(p)} } className={props.currentPage === p && c.activePage}>{p}</span>) 
                }
            </div>
            {
                props.users.map( (u) => <User key={u.id} id={u.id} isFollowed={u.followed} name={u.name} status={u.status} img_src={u.photos.small != null ? u.photos.small : defaultUserPhoto} submitFollowing={props.submitFollowing} submitUnfollowing={props.submitUnfollowing} />)
            }
        </div>
    )
}

export default Users;