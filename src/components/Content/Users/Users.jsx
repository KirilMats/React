import React from 'react';
import c from './Users.module.css';
import User from './User/User';
import * as axios from 'axios';
import defaultUserPhoto from '../../../assets/img/default-user.png';

const Users = (props) => {
    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);  
        });
        // props.setUsers([
        //     { id: 1, isFollowed: true, name: 'Jon', status: 'wdwef1f2f', location: {city: 'Dragstone', country: 'Westeros'}, img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
        //     { id: 2, isFollowed: true, name: 'Sansa', status: '1212!f1 fewwef ', location: {city: 'Winterfell', country: 'Westeros'}, img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp' },
        //     { id: 3, isFollowed: false, name: 'Cersei', status: '21e 12 21e 21', city: 'Kyiv', location: {city: 'Casterly Rock', country: 'Westeros'}, img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg' },
        //     { id: 4, isFollowed: true, name: 'Daenerys', status: '21e 12 21e 21', city: 'Kyiv', location: {city: 'Dragstone', country: 'Westeros'}, img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' },
        //     { id: 5, isFollowed: false, name: 'Jaime', status: '211e 12 21e 21', city: 'Kyiv', location: {city: 'Casterly Rock', country: 'Westeros'}, img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png'} 
        // ]);
    }
    return (
        <div className={c.users}>
            {
                props.users.map( (u) => <User key={u.id} id={u.id} isFollowed={u.followed} name={u.name} status={u.status} img_src={u.photos.small != null ? u.photos.small : defaultUserPhoto} submitFollowing={props.submitFollowing} submitUnfollowing={props.submitUnfollowing} />)
            }
        </div>
    )
} 

export default Users;