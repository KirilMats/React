import React from 'react';
import c from './Dialog.module.css';
import {NavLink} from 'react-router-dom';

const Dialog = ( {img_src, name, id}) => {
  return (
    <div className={c.dialog}>
      <NavLink to={'/dialogs/' + id} activeClassName={c.active}>
        <img className={c.interlocutor_photo} src={img_src} alt="photo"/>
        <span className={c.interlocutor_name}>{name}</span>
      </NavLink>
    </div>
  )
}

export default Dialog;