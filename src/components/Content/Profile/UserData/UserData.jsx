import React from 'react';
import c from './UserData.module.css';
import defaultUserPhoto from '../../../../assets/img/default-user.png';
import Preloader from '../../Preloader/Preloader';

const UserData = (props) => {
  console.log(props);
  if(!props.userData){
    return <Preloader />
  }
  return (
    <div className={c.user_data}> 
      <img src={props.userData.photos.small} alt="" />
        <div className={c.user_info}>
        <div className={c.user_name}>{props.userData.fullName ? props.userData.fullName : 'Unkonwn'}</div>
        {props.userData.aboutMe ? <div className={c.user_about}>{props.userData.aboutMe}</div> : null}
        <div className={c.user_info_details}>
          {props.userData.dob ? <div className={c.user_dob}>Date of birth: {props.userData.dob}</div> : null}
          {props.userData.city ? <div className={c.city}>City: {props.userData.city}</div> : null}
          {props.userData.education ? <div className={c.education}>Education: {props.userData.education}</div> : null}
          <div className={c.userJobStatus}>{props.userData.lookingForAJob ? 'I\'m looking for job: ' + props.userData.lookingForAJobDescription : 'Currently I have a job'}</div>
          <br />
          {props.userData.contacts.mainLink ? <div className={c.main_link}><a href={props.userData.contacts.mainLink} target="_blank">Must visit</a></div> : null}
          {props.userData.contacts.website ? <div className={c.website}><a href={props.userData.contacts.website} target="_blank">Website</a></div> : null}
          {props.userData.contacts.instagram ? <div className={c.instagram}><a href={props.userData.contacts.instagram} target="_blank">Instagram</a></div> : null}
          {props.userData.contacts.facebook ? <div className={c.facebook}><a href={props.userData.contacts.facebook} target="_blank">Facebook</a></div> : null}
          {props.userData.contacts.twitter ? <div className={c.twitter}><a href={props.userData.contacts.twitter} target="_blank">Twitter</a></div> : null}
          {props.userData.contacts.vk ? <div className={c.vk}><a href={props.userData.contacts.vk} target="_blank">VK</a></div> : null}
          {props.userData.contacts.youtube ? <div className={c.youtube}><a href={props.userData.contacts.youtube} target="_blank">Youtube</a></div> : null}
          {props.userData.contacts.github ? <div className={c.github}><a href={props.userData.contacts.github} target="_blank">Github</a></div> : null}
        </div>
      </div>
    </div>
  )
}

export default UserData;