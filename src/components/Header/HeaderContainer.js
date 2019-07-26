import React from 'react';
import {setUserAuthData, showPreloader} from '../../redux/auth-reducer';
import {setUserData} from '../../redux/profile-reducer';
import Header from './Header';
import * as axios from 'axios';
import { connect } from 'react-redux';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            this.props.showPreloader(false);
            if(response.data.resultCode === 0){
                let {id, login, email} = response.data.data;
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

export default connect(mapStateToProps, {setUserAuthData, setUserData, showPreloader})(HeaderContainer);