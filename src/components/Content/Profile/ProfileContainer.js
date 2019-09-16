import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserData} from '../../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';
import Preloader from '../../Content/Preloader/Preloader';
import {showPreloader} from '../../../redux/users-reducer';
import {Redirect} from 'react-router-dom';
import withAuthRedirect from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {
    componentDidMount() {
        // this.props.showPreloader(true);
        let userId = this.props.match.params.userId ? this.props.match.params.userId : 1301;
        // profileAPI.getUserData(userId).then(data => {
        //     this.props.showPreloader(false);
        //     return this.props.setUserData(data)
        // });
        this.props.getUserData(userId, this.props.showPreloader);
    }

    render() {
        return this.props.isFetching ? <Preloader /> : this.props.isAuth ? <Profile {...this.props} /> : <Redirect to="/login" /> //expand all the props from an object to separate attributes {...this.props}
    }
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => ({
    userData: state.profileData.userData,
    userId: state.authData.userId,
    isFetching: state.usersData.isFetching
});

// let WithUrlDataContainer = withRouter(AuthRedirectComponent);

// export default connect(mapStateToProps, {getUserData, showPreloader})(WithUrlDataContainer);

export default compose (connect(mapStateToProps, {getUserData, showPreloader}), withRouter, withAuthRedirect)(ProfileContainer);