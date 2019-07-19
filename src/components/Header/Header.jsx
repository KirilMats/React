import React from 'react';
import c from './Header.module.css';
import {NavLink} from 'react-router-dom';
import Preloader from '../Content/Preloader/Preloader';
import defaultUserPhoto from '../../assets/img/default-user.png';

const Header = (props) => {
  return (
    <header className={c.header}>
      <span>
        <img src="https://www.freeiconspng.com/uploads/white-earth-world-png-11.png" alt="" />
      </span>
      {props.isFetching ? <Preloader /> :
        <div className={c.login_wrap}>
          <NavLink to={props.isAuth ? '/page' : '/login'} className={c.login_link}>
            <span className={c.login_name}>{props.isAuth ? 'Welcome, ' + props.login : 'Login'}</span>
            {props.photo ? <img src={props.photo} alt="" /> : <img src={defaultUserPhoto} alt="" />}
          </NavLink>
        </div>
      }
    </header>
  )
}

export default Header;