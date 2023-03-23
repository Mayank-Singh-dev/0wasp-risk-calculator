import React, { useState } from 'react';
import './Navbar.css';
import { SiOwasp } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="Navbar__container">
      <ul className={showMenu ? 'dropdown show' : 'dropdown'}>
        <li>
          <NavLink exact="true" to="/" activeclassname="active" onClick={() => setShowMenu(false)}>
            Risk Assessment
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/about" activeclassname="active" onClick={() => setShowMenu(false)}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink exact="true" to="/contact" activeclassname="active" onClick={() => setShowMenu(false)}>
            Hire Me
          </NavLink>
        </li>
      </ul>
      <div className="menu__icon" onClick={handleMenuClick}>
        <HiMenu />
      </div>
      <div className="Nav__main">
        <h2>
          <SiOwasp /> OWASP Risk Calulator
        </h2>
      </div>
    </div>
  );
};

export default Navbar;

