import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import Modal from '../Modal/Modal';
import EditForm from './EditForm';

const EditReview = ({ content }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  //   console.log('hello');

  //   return <button onClick={() => console.log(`hi ${review.review}`)}>hi</button>;

  return (
    <div>
      <button className="review__edit" onClick={() => (modalOpen ? close() : open())}>
        edit
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
