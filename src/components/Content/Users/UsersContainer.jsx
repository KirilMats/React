import React from 'react';
import Users from './Users';
import User from './User/User';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state.usersData.userMainInfo.map( (u) => <User key={u.id} id={u.id} name={u.name} city={u.location.city} country={u.location.country} status={u.status} img_src={u.img_src} />)
    }
}

let mapDispatchToProps = (dispatch) => {
    return {

    }
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;