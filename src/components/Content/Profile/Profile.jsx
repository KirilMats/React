import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = (props) => {
  
  return (
    <div className={c.profile}>
      <UserData store={props.store} />
      <PostsContainer store={props.store} />
    </div>
  )
}

export default Profile;