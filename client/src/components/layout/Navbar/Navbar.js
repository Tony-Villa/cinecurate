import React, { useContext, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Modal from '../../shared/Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.scss';
import { AuthForm } from '../../auth/AuthForm/AuthForm';
import { UserContext } from '../../../Context/UserContext';
import { Link } from 'react-router-dom';

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
          <p className="text-link content-font">Logo</p>
        </a>
      </div>
      <Searchbar />
      <div className="nav__links">
        <ul className="nav__ul flex">
          {user && (
            <Link className="text-link" to={`profile/${user.id}`}>
              {user.first_name}
            </Link>
          )}
          <li className="nav__li">Browse</li>

          {!isUser ? (
            <button className="nav__li" onClick={() => (modalOpen ? close() : open())}>
              Sign In/Up
            </button>
          ) : (
            <button className="logout" onClick={(e) => logout(e)}>
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
