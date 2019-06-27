import React from 'react';
import c from './Header.module.css';

const Header = () => {
  return (
    <header className={c.header}>
      <span>
        <img src="https://www.freeiconspng.com/uploads/white-earth-world-png-11.png" alt="" />
      </span>
    </header>
  )
}

export default Header;