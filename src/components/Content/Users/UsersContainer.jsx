import React from 'react';
import {connect} from 'react-redux';
import {submitFollowing, setUsers, setUsersTotalCount, setCurrentPage, showPreloader} from './../../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../../Content/Preloader/Preloader';

class UsersContainer extends React.Component {
    // constructor(props) { // если в компоненте конструктор только лишь вызывает родительский конструктор, то можно его вообще не определять
    //     super(props); // вызывается конструктор родительский (от React.Component)
    // }
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.showPreloader(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        });
    }
    onPageChange = (page) => {
        this.props.showPreloader(true);
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            console.log(response);
            this.props.showPreloader(false);
            this.props.setUsers(response.data.items);
        });
    }
    render() {
    return this.props.isFetching ? <Preloader /> : <Users isFetching={this.props.isFetching} submitUnfollowing={this.props.submitUnfollowing} submitFollowing={this.props.submitFollowing} currentPage={this.props.currentPage} usersTotalCount={this.props.usersTotalCount} pageSize={this.props.pageSize} onPageChange={this.onPageChange} users={this.props.users} />
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

export default connect(mapStateToProps, {submitFollowing, setUsers, setUsersTotalCount, setCurrentPage, showPreloader})(UsersContainer);