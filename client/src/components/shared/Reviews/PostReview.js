import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReviewForm from '../Forms/ReviewForm/ReviewForm';
import Modal from '../Modal/Modal';

function PostReview({ category, title, movie_id }) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  //   console.log(category);
  //   console.log(movie_id, title);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    scrollToTop();
  }, [modalOpen]);

  return (
    <div>
      <div className="review">
        <h1>post review</h1>
        <button className="review__post" onClick={() => (modalOpen ? close() : open())}>
          +
        </button>
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal
            text={<ReviewForm handleClose={close} category={category} title={title} id={movie_id} />}
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default PostReview;
