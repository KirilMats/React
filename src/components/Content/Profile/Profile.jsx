import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = (props) => {
  const {profileData} = props.store.getState();
  return (
    <div className={c.profile}>
      <UserData userData={profileData.userData} />
      <PostsContainer />
    </div>
  )
}

export default Profile;