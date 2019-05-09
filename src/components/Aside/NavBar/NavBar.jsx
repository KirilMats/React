import React from 'react';
import c from './NavBar.module.css';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={c.nav}>
      <div className={c.item}>
        <NavLink to="/profile" activeClassName={c.active}>Profile</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/dialogs" activeClassName={c.active}>Messages</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/feed" activeClassName={c.active}>Feed</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/music" activeClassName={c.active}>Music</NavLink>
      </div>
      <div className={c.item}>
        <NavLink to="/settings" activeClassName={c.active}>Settings</NavLink>
      </div>
    </nav>
  )
}

export default NavBar;
