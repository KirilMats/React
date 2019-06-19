import React from 'react';
import Posts from './Posts';
import { updateNewPostTextCreator, addPostCreator, addLikeCreator, addDislikeCreator } from '../../../../redux/profile-reducer';

const PostsContainer = (props) => {
  const {profileData} = props.store.getState(),
        {dispatch} = props.store.dispatch;

  const onPostChange = (text) => {
    dispatch(updateNewPostTextCreator(text));
  }
  const addPost = () => {
    dispatch(addPostCreator());
  }
  const addLike = (currentLikes, index) => {
    dispatch(addLikeCreator(currentLikes, index));
  }
  const addDislike = (currentDislikes, index) => {
    dispatch(addDislikeCreator(currentDislikes, index));
  }
  return <Posts postChange={onPostChange} addNewPost={addPost} addLike={addLike} addDislike={addDislike} profileData={profileData} newPostText={profileData.newPostText}/>;
}

export default PostsContainer;