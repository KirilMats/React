import React from 'react';
import c from './UserData.module.css';

const UserData = ({userData}) => {
  return (
    <div className={c.user_data}> 
      <img src={userData.img_src} />
        <div className={c.user_info}>
        <div className={c.user_name}>Mr. {userData.name}</div>
        <div className={c.user_info_details}>
          <div className={c.user_dob}>Date of birth: {userData.dob}</div>
          <div className={c.user_city}>City: {userData.city}</div>
          <div className={c.user_edu}>Education: {userData.education}</div>
          <div className={c.user_website}>Wesite: {userData.website}</div>
        </div>
      </div>
    </div>
  )
}

export default UserData;