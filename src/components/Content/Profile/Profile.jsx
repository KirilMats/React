import React from 'react';
import PostsContainer from './Posts/PostsContainer';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = (props) => {
  console.log(props);
  return (
    <div className={c.profile}>
      <UserData userData={props.userData} />
      <PostsContainer />
    </div>
  )
}

export default Profile;