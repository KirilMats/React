import React from 'react';
import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <a href="#">
        <img src="https://www.freeiconspng.com/uploads/white-earth-world-png-11.png" />
      </a>
    </header>
  )
}

export default Header;