import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ current }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  };

  return (
    <header>
      <div
        onClick={handleClick}
        className={showMenu ? 'menu-btn close' : 'menu-btn'}
      >
        <div className='btn-line'></div>
        <div className='btn-line'></div>
        <div className='btn-line'></div>
      </div>

      <nav className={showMenu ? 'menu show' : 'menu'}>
        <div className={showMenu ? 'menu-branding show' : 'menu-branding'}>
          <div className='portrait'></div>
        </div>
        <ul className={showMenu ? 'menu-nav show' : 'menu-nav'}>
          <li
            className={
              showMenu
                ? current === 'home'
                  ? 'nav-item current show'
                  : 'nav-item show'
                : 'nav-item current'
            }
          >
            <Link to='/' className='nav-link'>
              Home
            </Link>
          </li>
          <li
            className={
              showMenu
                ? current === 'projects'
                  ? 'nav-item current show'
                  : 'nav-item show'
                : 'nav-item current'
            }
          >
            <Link to='/projects' className='nav-link'>
              My Projects
            </Link>
          </li>
          <li
            className={
              showMenu
                ? current === 'about'
                  ? 'nav-item current show'
                  : 'nav-item show'
                : 'nav-item current'
            }
          >
            <Link to='/about' className='nav-link'>
              About
            </Link>
          </li>
          <li
            className={
              showMenu
                ? current === 'contact'
                  ? 'nav-item current show'
                  : 'nav-item show'
                : 'nav-item current'
            }
          >
            <Link to='/contact' className='nav-link'>
              Contact Me
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
