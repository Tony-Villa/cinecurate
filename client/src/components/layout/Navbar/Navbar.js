import React, { useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../../shared/Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.scss';
import { AuthForm } from '../../auth/AuthForm/AuthForm';
import { UserContext } from '../../../Context/UserContext';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../asstes/logo-png.png';

const Navbar = ({ isUser, setAuth }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const { user } = useContext(UserContext);
  // const { first_name } = user;

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('token');
    setAuth(false);
  };

  return (
    <nav className="nav flex">
      <div className="nav__logo">
        <a href="/">
          <img className="nav__logo-img" src={logo} alt="" />
        </a>
      </div>
      <Searchbar />
      <div className="nav__links">
        <ul className="nav__ul flex">
          {user && (
            // <div className="btn-link">
            <NavLink className="btn-link" to={`profile/${user.id}`}>
              <p className="btn-link content-font nav__profile">{user.first_name}</p>
            </NavLink>
            // </div>
          )}
          {/* <li className="nav__li">Browse</li> */}

          {!isUser ? (
            <button className="nav__li btn-cta" onClick={() => (modalOpen ? close() : open())}>
              Sign In/Up
            </button>
          ) : (
            <button className="logout btn-cta" onClick={(e) => logout(e)}>
              Log Out
            </button>
          )}
        </ul>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {modalOpen && (
            <Modal
              text={<AuthForm setAuth={setAuth} handleClose={close} />}
              modalOpen={modalOpen}
              handleClose={close}
            />
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
