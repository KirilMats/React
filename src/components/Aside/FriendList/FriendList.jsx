import React from 'react';
import Friend from './Friend/Friend';
import c from './FriendList.module.css';


const FriendList = ({friendData}) => {

    const friends = friendData.map( (f, index) => <Friend key={index} img_src={f.img_src} name={f.name} />);

    return (
        <div className={c.friendList}>
            <h2>Friends</h2>
            <div className={c.friends}>
                { friends }
            </div>
        </div>
    )
}
export default FriendList;