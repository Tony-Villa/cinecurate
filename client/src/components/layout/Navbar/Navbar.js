import React from 'react';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className="nav flex">
      <div className="nav__logo">
        <a href="/">
          <p className="text-link content-font">Logo</p>
        </a>
      </div>
      <Searchbar />
      <div className="nav__links">
        <ul className="nav__ul flex">
          <li className="nav__li">Browse</li>
          <li className="nav__li">Sign In/Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
