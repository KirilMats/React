import React from 'react';
import Profile from './Profile';
import {getUserData} from './../../../api/api';
import { connect } from 'react-redux';
import {setUserData} from '../../../redux/profile-reducer';
import {withRouter} from 'react-router-dom';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId ? this.props.match.params.userId : this.props.userId;
        getUserData(userId).then(data => {this.props.setUserData(data)});
    }

    render() {
        return <Profile {...this.props}/> //expand all the props from an object to separate attributes {...this.props}
    }
}

const mapStateToProps = (state) => ({
    userData: state.profileData.userData,
    userId: state.authData.userId
});

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserData})(WithUrlDataContainer);