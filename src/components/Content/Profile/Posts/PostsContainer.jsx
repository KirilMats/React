import React from 'react';
import Posts from './Posts';
import { updateNewPostTextCreator, addPostCreator } from '../../../../redux/profile-reducer';

const PostsContainer = ({profileData, dispatch}) => {
  const onPostChange = (text) => {
    dispatch(updateNewPostTextCreator(text));
  }
  const addPost = () => {
    dispatch(addPostCreator());
  }
  return <Posts postChange={onPostChange} addNewPost={addPost} postData={profileData.postData} newPostText={profileData.newPostText}/>;
}

export default PostsContainer;