import React from 'react';
import logo from '../../images/logo.svg';
import './navbar.css';

const Navbar = () => {
  return (
    <div>
        <nav className='main-nav'>
            {/* logo */}
            <div className='logo'>
                <img src={logo} alt="AIESEC logo"/>
            </div>
            {/* Menu */}
            <div className='menu-links'>
                <ul>
                    <li>
                        <a href="#">Our partners</a>
                    </li>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">For organization</a>
                    </li>
                    <li>
                    <button className='login-btn'><span>Login</span></button>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
  );
};

export default Navbar;