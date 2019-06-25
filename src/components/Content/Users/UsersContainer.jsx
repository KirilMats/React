import React from 'react';
import Users from './Users';
import User from './User/User';
import {connect} from 'react-redux';
import submitFollowingAC from './../../../redux/users-reducer';
import submitUnfollowingAC from './../../../redux/users-reducer';

const mapStateToProps = (state) => {
    return {
        users: state.usersData.userMainInfo.map( (u) => <User key={u.id} id={u.id} isFollowed={u.isFollowed} name={u.name} city={u.location.city} country={u.location.country} status={u.status} img_src={u.img_src} />)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitFollowing: (index, isFollowed) => {
            dispatch(submitFollowingAC(index, isFollowed));
        },
        submitUnfollowing: (index, isFollowed) => {
            dispatch(submitUnfollowingAC(index, isFollowed));
        }
    }
}

const UsersContainer = connect(mapStateToProps) (Users);

export default UsersContainer;