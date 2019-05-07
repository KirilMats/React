import React from 'react';
import c from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = ( {img_src, interlocutor, interlocutor_id}) => {
  return (
    <div className={c.dialog}>
      <NavLink to={'/dialogs/' + interlocutor_id} activeClassName={c.active}>
        <img className={c.interlocutor_photo} src={img_src} alt="photo"/>
        <span className={c.interlocutor_name}>{interlocutor}</span>
      </NavLink>
    </div>
  )
}

export default Dialog;