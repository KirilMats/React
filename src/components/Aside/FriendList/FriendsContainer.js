import React from 'react';
import FriendList from './FriendList';
import {connect} from 'react-redux';
import {getFriends} from '../../../redux/friends-reducer';

class FriendsContainer extends React.Component {
    componentDidMount() {
        this.props.getFriends();
    }

    render() {
        return <FriendList friends={this.props.friends} />
    }
}

const mapStateToProps = (state) => {
    return {
        friends: state.friendsData.friends
    }
}

export default connect(mapStateToProps, {getFriends})(FriendsContainer);