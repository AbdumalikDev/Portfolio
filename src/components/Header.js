import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <header>
      <div
        onClick={handleClick}
        className={showMenu ? 'menu-btn show' : 'menu-btn close'}
      >
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>

      <nav className='menu'>
        <div className='menu-branding'>
          <div className='portrait'></div>
        </div>
        <ul className='menu-nav'>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              My Projects
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              About
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/' className='nav-link'>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
