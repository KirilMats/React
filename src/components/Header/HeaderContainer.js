import React from 'react';
import {setUserAuthData, showPreloader} from '../../redux/auth-reducer';
import Header from './Header';
import {authAPI} from './../../api/api';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.getUserAuthData().then(data => {
            this.props.showPreloader(false);
            if(data.resultCode === 0){
                let {id, login, email} = data.data;
                this.props.setUserAuthData(id, login, email);
            }
        });
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

export default connect(mapStateToProps, {setUserAuthData, showPreloader})(HeaderContainer);