import React from 'react';
import Music from './Music';
import {connect} from 'react-redux';

class MusicContainer extends React.Component {
    componentDidMount() {
    }
    render() {
        return <Music />
    }
}

export default connect()(MusicContainer);