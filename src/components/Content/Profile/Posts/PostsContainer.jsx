import Posts from './Posts';
import { changePostText, addNewPost, addLike, addDislike } from '../../../../redux/profile-reducer';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    profileData: state.profileData
  }
}

const PostsContainer = connect(mapStateToProps, {changePostText, addNewPost, addLike, addDislike})(Posts);

export default PostsContainer;

// const PostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {
//         store => {
//           console.log(store);
//           const {profileData} = store.getState(),
//           dispatch = store.dispatch;
//           const onPostChange = (text) => {
//             dispatch(updateNewPostTextCreator(text));
//           }
//           const addPost = () => {
//             dispatch(addPostCreator());
//           }
//           const addLike = (currentLikes, index) => {
//             dispatch(addLikeCreator(currentLikes, index));
//           }
//           const addDislike = (currentDislikes, index) => {
//             dispatch(addDislikeCreator(currentDislikes, index));
//           }
//           return <Posts postChange={onPostChange} addNewPost={addPost} addLike={addLike} addDislike={addDislike} profileData={profileData}/>;
//         }
//       }
//       </StoreContext.Consumer>
//   )
// }