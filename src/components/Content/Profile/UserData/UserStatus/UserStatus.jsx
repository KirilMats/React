import React from 'react';
import c from './UserStatus.module.css';

class UserStatus extends React.Component {
    state = {
        editMode: true
    }
    render() {
        return (
            <div className={c.status_wrap}>
                {this.props.editMode ? <input type="text" value={this.props.status} /> : <span className={c.status}>{this.props.status}</span>}
            </div>
        )
    }
}

export default UserStatus;