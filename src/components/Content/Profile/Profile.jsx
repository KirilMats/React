import React from 'react';
import Posts from './Posts/Posts';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = ({profileData, dispatch}) => {
  
  return (
    <div className={c.profile}>
      <UserData userData={profileData.userData} />
      <Posts profileData={profileData} dispatch={dispatch} />
    </div>
  )
}

export default Profile;