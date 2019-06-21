import React from 'react';
import Posts from './Posts';
import { updateNewPostTextCreator, addPostCreator, addLikeCreator, addDislikeCreator } from '../../../../redux/profile-reducer';
import StoreContext from '../../../../StoreContext';


const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        store => {
          console.log(store);
          const {profileData} = store.getState(),
          dispatch = store.dispatch;
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
          return <Posts postChange={onPostChange} addNewPost={addPost} addLike={addLike} addDislike={addDislike} profileData={profileData}/>;
        }
      }
      </StoreContext.Consumer>
  )
}


export default PostsContainer;