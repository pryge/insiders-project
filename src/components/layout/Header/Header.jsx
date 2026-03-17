import React from 'react';
import './Header.css';

import logo from '../../../assets/icons/logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
          <img src={logo} alt="Logo" className="logo-img" />
          <span className="logo-text">blinqpay</span>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-list">
            <li><a href="#products">Products</a></li>
            <li><a href="#developers">Developers</a></li>
            <li><a href="#company">Company</a></li>
            <li><a href="#pricing">Pricing</a></li>
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#support" className="support-link">Support</a>
          <button className="btn btn-secondary sign-in-btn">Sign In</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
