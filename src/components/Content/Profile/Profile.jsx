import React from 'react';
import Posts from './Posts/Posts';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = () => {
  return (
    <div className={c.profile}>
      <UserData />
      <Posts />
    </div>
  )
}

export default Profile;