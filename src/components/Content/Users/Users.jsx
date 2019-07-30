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
        <div className={c.users_wrap}>
            <div className={c.pages}>
                {
                    pages.map( p => <span onClick={(e) => {props.onPageChange(p)} } className={props.currentPage === p && c.activePage}>{p}</span>) 
                }
            </div>
            <div className={c.users}>
                {    
                    props.users.map( (u) => <User key={u.id} id={u.id} onFollowSubmit={props.onFollowSubmit} isFollowingFetching={props.isFollowingFetching} isFollowed={u.followed} name={u.name} status={u.status} img_src={u.photos.small != null ? u.photos.small : defaultUserPhoto} submitFollowing={props.submitFollowing} />)      
                }
            </div>
        </div>
    )
}

export default Users;