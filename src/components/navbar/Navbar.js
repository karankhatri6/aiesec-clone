import React, { useState } from "react";
import logo from '../../images/logo.svg';
import mobilelogo from '../../images/mobile-logo.svg';
import './navbar.css';
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <div>
        <nav className='main-nav'>
            {/* logo */}
            <div className='logo'>
                <img src={logo} alt="AIESEC logo"/>
            </div>
            <div className='mobile-logo'>
                <img src={mobilelogo} alt="AIESEC logo"/>
            </div>
            {/* Menu */}
            <div className={
            showMediaIcons ? 'menu-links mobile-menu-link' : 'menu-links'
            }>
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
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
                  <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                    <GiHamburgerMenu />
                  </a>
                </div>
        </nav>
    </div>
  );
};

export default Navbar;