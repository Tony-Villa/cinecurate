import React from 'react';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div id="navbar">
      <div className="logo">
        <p>Logo</p>
      </div>
      <div className="search-bar">
        <p>Search Bar</p>
      </div>
      <div className="nav-links-container">
        <ul className="nav-links">
          <li>Browse</li>
          <li>Sign In/Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
