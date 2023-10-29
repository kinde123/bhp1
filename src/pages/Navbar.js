 
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import logo from "./images/lo.png";
import ImageSection from './imageSection';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const handleNavToggle = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  }

  return (
    <nav className="navbar fixed">
      <div className="container">
        <Link to="/" className="navbar-logo">
          <img src={logo} alt="logo" />
        </Link>
        <button className="navbar-toggle" onClick={handleNavToggle}>
          <span className="navbar-toggle-icon">{showNav ? '×' : '☰'}</span>
        </button>
        <ul className={`navbar-menu ${showNav ? 'active' : ''}`}>
          <li className="navbar-item">
            <Link to="/" className="navbar-link" onClick={handleLinkClick}>Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/About" className="navbar-link" onClick={handleLinkClick}>About</Link>
          </li>
          <li className="navbar-item">
            <Link to="/courseDetails" className="navbar-link" onClick={handleLinkClick}>Course Details</Link>
          </li>
          <li className="navbar-item">
            <Link to="/ContactUs" className="navbar-link" onClick={handleLinkClick}>ContactUs</Link>
          </li>
        </ul>
         
      </div>
     
    </nav>
  );
};

export default Navbar;