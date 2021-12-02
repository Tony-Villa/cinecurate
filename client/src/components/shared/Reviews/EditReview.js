import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import EditForm from './EditForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-regular-svg-icons';

const EditReview = ({ content }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  //   console.log('hello');

  //   return <button onClick={() => console.log(`hi ${review.review}`)}>hi</button>;

  return (
    <div>
      <button className="btn review__edit" onClick={() => (modalOpen ? close() : open())}>
        <FontAwesomeIcon icon={faEdit} size="lg" style={{ color: '#4A54EB' }} />
      </button>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal text={<EditForm content={content} handleClose={close} />} modalOpen={modalOpen} handleClose={close} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default EditReview;
