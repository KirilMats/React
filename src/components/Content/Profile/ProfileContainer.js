import React from 'react';
import Profile from './Profile';
import {profileAPI} from './../../../api/api';
import { connect } from 'react-redux';
import {setUserData} from '../../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../../Content/Preloader/Preloader';
import {showPreloader} from '../../../redux/users-reducer';

class ProfileContainer extends React.Component {
    componentDidMount() {
        this.props.showPreloader(true);
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
        profileAPI.getUserData(userId).then(data => {
            this.props.showPreloader(false);
            return this.props.setUserData(data)
        });
    }

    render() {
        return this.props.isFetching ? <Preloader /> : <Profile {...this.props}/> //expand all the props from an object to separate attributes {...this.props}
    }
}

const mapStateToProps = (state) => ({
    userData: state.profileData.userData,
    userId: state.authData.userId,
    isFetching: state.usersData.isFetching
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserData, showPreloader})(WithUrlDataContainer);