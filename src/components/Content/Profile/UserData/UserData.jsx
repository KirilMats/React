import React from 'react';
import c from './UserData.module.css';

const UserData = () => {

  const userData = {id: 1, name: 'Fox', dob: 'June 7', city: 'Kyiv', education: 'KNU\'14', website: 'https://www.lorem.ipsum', img_src: 'https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg'};

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