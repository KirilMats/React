import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = () => {
  
  return (
    <div className={c.profile}>
      <UserData />
      <PostsContainer />
    </div>
  )
}

export default Profile;