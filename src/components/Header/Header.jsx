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
          {
            props.isAuth ? 
            <NavLink to={`/profile/${props.userId}`} className={c.login_link}>
              <span className={c.login_name}>{'Welcome, ' + props.login}</span>
              {props.photo ? <img src={props.photo} alt="" /> : <img src={defaultUserPhoto} alt="" />}
            </NavLink>
            :
            <div className={c.login_register}>
              <NavLink to='/login' className={c.login_link}>
                <span className={c.login_name}>Login</span>
              </NavLink>
              <NavLink to='/register' className={c.login_link}>
                <span className={c.login_name}>Register</span>
              </NavLink>
            </div>
          }
        </div>
      }
    </header>
  )
}

export default Header;