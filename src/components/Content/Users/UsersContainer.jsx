import React from 'react';
import {connect} from 'react-redux';
import {getUsers, changeFollowing, setCurrentPage} from './../../../redux/users-reducer';
import Users from './Users';
import Preloader from '../../Content/Preloader/Preloader';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {
    // constructor(props) { // если в компоненте конструктор только лишь вызывает родительский конструктор, то можно его вообще не определять
    //     super(props); // вызывается конструктор родительский (от React.Component)
    // }
    componentDidMount() {
        // this.props.showPreloader(true);
        // usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.showPreloader(false);
        //     this.props.setUsers(data.items);
        //     this.props.setUsersTotalCount(data.totalCount);
        // });
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
    onPageChange = (page) => {
        this.props.setCurrentPage(page);
        this.props.getUsers(page, this.props.pageSize);
    }
    onFollowSubmit = (isFollowed, id) => {
        this.props.changeFollowing(isFollowed, id);
    }
    render() {
        console.log(this.props.isFollowingFetching);
        return this.props.isFetching ? <Preloader /> : <Users onFollowSubmit={this.onFollowSubmit} isFollowingFetching={this.props.isFollowingFetching} isFetching={this.props.isFetching} submitFollowing={this.props.submitFollowing} currentPage={this.props.currentPage} usersTotalCount={this.props.usersTotalCount} pageSize={this.props.pageSize} onPageChange={this.onPageChange} users={this.props.users} />
    }
}

// let AuthRedirectComponent = withAuthRedirect(UsersContainer);

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

// export default connect(mapStateToProps, {getUsers, changeFollowing, setCurrentPage})(AuthRedirectComponent);
export default compose(connect(mapStateToProps, {getUsers, changeFollowing, setCurrentPage}), withAuthRedirect)(UsersContainer);