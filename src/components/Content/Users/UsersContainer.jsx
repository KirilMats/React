import Users from './Users';
import {connect} from 'react-redux';
import {submitFollowingAC, setUsersAC, setUsersTotalCountAC, setCurrentPageAC} from './../../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        usersTotalCount: state.usersData.usersTotalCount,
        currentPage: state.usersData.currentPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitFollowing: (id, isFollowed) => {
            dispatch(submitFollowingAC(id, isFollowed));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setUsersTotalCount: (usersTotalCount) => {
            dispatch(setUsersTotalCountAC(usersTotalCount));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage));
        }
    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;