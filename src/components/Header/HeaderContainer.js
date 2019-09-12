import React from 'react';
import {getUserAuthData} from '../../redux/auth-reducer';
import Header from './Header';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getUserAuthData();
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    userId: state.authData.userId,
    login: state.authData.login,
    isAuth: state.authData.isAuth,
    photo: state.authData.photo,
    isFetching: state.authData.isFetching
})

export default connect(mapStateToProps, {getUserAuthData})(HeaderContainer);