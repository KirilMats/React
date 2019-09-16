import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.authData.isAuth
});

const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render() {
            return this.props.isAuth ? <Component {...this.props} /> : <Redirect to="/login" />
        }
    }

    const connectedRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return connectedRedirectComponent;
}

export default withAuthRedirect;