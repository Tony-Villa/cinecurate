import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import ReviewForm from '../Forms/ReviewForm/ReviewForm';
import Modal from '../Modal/Modal';
import './PostReview.scss';

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

  // console.log(category);

  return (
    <div>
      <div className="review">
        <div className="review-post-option flex">
          <button
            className="btn btn-post  review__post-option mt-1 content-font test"
            onClick={() => (modalOpen ? close() : open())}
          >
            +
          </button>
        </div>
        <div className="review-header-title">
          <h3 className="text-center header-font option-title">Review {category}</h3>
        </div>
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
