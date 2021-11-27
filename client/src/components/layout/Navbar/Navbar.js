import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.scss';

const Navbar = () => {
  return (
    <div id="navbar" className="flex">
      <div className="logo">
        <p>Logo</p>
      </div>
      <Searchbar />
      <div className="nav-links">
        <ul className="nav-container flex">
          <li>Browse</li>
          <li>Sign In/Up</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
