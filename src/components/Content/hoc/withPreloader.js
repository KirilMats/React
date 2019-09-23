import React from 'react';
import {connect} from 'react-redux';
import Preloader from '../Preloader/Preloader';

const mapStateToProps = (state) => ({
    isFetching: state.profileData.isFetching
})

const withPreloaderComponent = (Component) => {
    class PreloaderComponent extends React.Component {
        render() {
            return this.props.isFetching ? <Preloader /> : <Component {...this.props} />
        }
    }
    const connectedPreloaderComponent = connect(mapStateToProps)(PreloaderComponent);

    return connectedPreloaderComponent;
}

export default withPreloaderComponent;
