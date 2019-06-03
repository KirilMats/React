import React from 'react';
import Posts from './Posts/Posts';
import UserData from './UserData/UserData';
import c from './Profile.module.css';

const Profile = ({userData, postData, addPost, newPostText, updateNewPostText, addLike, addDislike}) => {
  
  return (
    <div className={c.profile}>
      <UserData userData={userData} />
      <Posts newPostText={newPostText} postData={postData} userData={userData} addPost={addPost} updateNewPostText={updateNewPostText} addLike={addLike} addDislike={addDislike} />
    </div>
  )
}

export default Profile;