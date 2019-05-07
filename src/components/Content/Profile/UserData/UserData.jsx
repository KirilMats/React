import React from 'react';
import c from './UserData.module.css';

const UserData = () => {
  return (
    <div className={c.user_data}>
      <img src="https://2.bp.blogspot.com/-BWPDUSeSm00/V3saizXgO3I/AAAAAAAAJxw/Yldh9jPAWnYFdFfPlzcU3MtElhEqW_Q6wCLcB/s1600/Fox%2Bin%2BBlack%2Band%2BWhite%2B633.jpg" />
      <div className={c.user_info}>
        <div className={c.user_name}>Mr. Fox</div>
        <div className={c.user_info_details}>
          <div className={c.user_dob}>Date of birth: June 7</div>
          <div className={c.user_city}>City: Kyiv</div>
          <div className={c.user_edu}>Education: KNU'14</div>
          <div className={c.user_website}>Wesite: https://www.lorem.ipsum</div>
        </div>
      </div>
    </div>
  )
}

export default UserData;