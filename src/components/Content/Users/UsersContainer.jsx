import React from 'react';
import {connect} from 'react-redux';
import {submitFollowing, setUsers, setUsersTotalCount, setCurrentPage, showPreloader, showFollowingPreloader} from './../../../redux/users-reducer';
import {usersAPI} from './../../../api/api';
import Users from './Users';
import Preloader from '../../Content/Preloader/Preloader';

class UsersContainer extends React.Component {
    // constructor(props) { // если в компоненте конструктор только лишь вызывает родительский конструктор, то можно его вообще не определять
    //     super(props); // вызывается конструктор родительский (от React.Component)
    // }
    componentDidMount() {
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.showPreloader(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        });
    }
    onPageChange = (page) => {
        this.props.showPreloader(true);
        this.props.setCurrentPage(page);
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            console.log(data);
            this.props.showPreloader(false);
            this.props.setUsers(data.items);
        });
    }
    onFollowSubmit = (isFollowed, id) => {
        this.props.showFollowingPreloader(true, id);
        isFollowed ?
        usersAPI.changeFollowing(isFollowed, id).then(data => {
            this.props.showFollowingPreloader(false, id);
            return data.resultCode == 0 && this.props.submitFollowing(id, true);
        })   
        :
        usersAPI.changeFollowing(isFollowed, id).then(data => {
            this.props.showFollowingPreloader(false, id);
            return data.resultCode == 0 && this.props.submitFollowing(id, false);
        })
    }

    render() {
        console.log(this.props.isFollowingFetching);
        return this.props.isFetching ? <Preloader /> : <Users onFollowSubmit={this.onFollowSubmit} isFollowingFetching={this.props.isFollowingFetching} isFetching={this.props.isFetching} submitFollowing={this.props.submitFollowing} currentPage={this.props.currentPage} usersTotalCount={this.props.usersTotalCount} pageSize={this.props.pageSize} onPageChange={this.onPageChange} users={this.props.users} />
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        usersTotalCount: state.usersData.usersTotalCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        isFollowingFetching: state.usersData.isFollowingFetching
        
    }
}

export default connect(mapStateToProps, {submitFollowing, setUsers, setUsersTotalCount, setCurrentPage, showPreloader, showFollowingPreloader})(UsersContainer);