import React from 'react';
import Posts from './Posts/Posts';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = ({userData, postData, addPost}) => {
  
  return (
    <div className={c.profile}>
      <UserData userData={userData} />
      <Posts postData={postData} userData={userData} addPost={addPost} />
    </div>
  )
}

export default Profile;