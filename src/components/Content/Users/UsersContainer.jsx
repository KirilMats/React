import Users from './Users';
import {connect} from 'react-redux';
import {submitFollowingAC, setUsersAC} from './../../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitFollowing: (index, isFollowed) => {
            dispatch(submitFollowingAC(index, isFollowed));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;