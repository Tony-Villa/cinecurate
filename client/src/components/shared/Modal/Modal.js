import React from 'react';
import { motion } from 'framer-motion';
import Backdrop from '../Backdrop/Backdrop';
import './Modal.scss';

function Modal({ handleClose, text }) {
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        onClick={(e) => e.stopPropagation()}
        className="flex modal orange-gradient"
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="modal__content">{text}</div>
        <button onClick={handleClose}>Close</button>
      </motion.div>
    </Backdrop>
  );
}

export default Modal;
