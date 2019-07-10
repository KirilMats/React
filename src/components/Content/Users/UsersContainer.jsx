import React from 'react';
import {connect} from 'react-redux';
import {submitFollowingAC, setUsersAC, setUsersTotalCountAC, setCurrentPageAC, showPreloaderAC} from './../../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../../assets/img/preloader.gif';

class UsersContainer extends React.Component {
    // constructor(props) { // если в компоненте конструктор только лишь вызывает родительский конструктор, то можно его вообще не определять
    //     super(props); // вызывается конструктор родительский (от React.Component)
    // }
    componentDidMount() {
        this.props.showPreloader(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.showPreloader(true);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }
    onPageChange = (page) => {
        this.props.showPreloader(true);
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            console.log(response);
            this.props.showPreloader(true);
            this.props.setUsers(response.data.items);
        });
    }
    render() {
        return this.props.isFetching ? <img className="preloader" src={preloader} alt="preloader" /> : <Users isFetching={this.props.isFetching} submitUnfollowing={this.props.submitUnfollowing} submitFollowing={this.props.submitFollowing} currentPage={this.props.currentPage} usersTotalCount={this.props.usersTotalCount} pageSize={this.props.pageSize} onPageChange={this.onPageChange} users={this.props.users} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        usersTotalCount: state.usersData.usersTotalCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching
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
        },
        showPreloader: (isFetching) => {
            dispatch(showPreloaderAC(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);