import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../../shared/Modal/Modal';
import Searchbar from '../Searchbar/Searchbar';
import './Navbar.scss';
import { AuthForm } from '../../auth/AuthForm/AuthForm';

const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

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
          <button className="nav__li" onClick={() => (modalOpen ? close() : open())}>
            Sign In/Up
          </button>
        </ul>

        <AnimatePresence initial={false} exitBeforeEnter={true}>
          {modalOpen && <Modal text={<AuthForm />} modalOpen={modalOpen} handleClose={close} />}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
