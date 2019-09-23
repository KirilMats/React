import React from 'react';
import c from './UserStatus.module.css';

class UserStatus extends React.Component {
    render() {
        return (
            <div className={c.status_wrap}>
                <span className={c.status}>{this.props.status}</span>
                <input type="text" value={this.props.status} />
            </div>
        )
    }
}

export default UserStatus;