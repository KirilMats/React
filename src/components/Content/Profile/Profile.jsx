import React from 'react';
import Posts from './Posts/Posts';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = ({userData, postData}) => {
  
  return (
    <div className={c.profile}>
      <UserData userData={userData} />
      <Posts postData={postData} />
    </div>
  )
}

export default Profile;