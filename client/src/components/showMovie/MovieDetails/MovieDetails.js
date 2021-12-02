import { AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../../shared/Modal/Modal';
import PlayTrailer from '../PlayTrailer/PlayTrailer';
import './MovieDetails.scss';

const MovieDetails = ({ title, overview, genres, runtime }) => {
  const [formattedRuntime, setFormattedRuntime] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  const genRuntime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;

    setFormattedRuntime(`${hours}h ${mins}m`);
  };

  const genGenrePills = (genre) => {
    return genre.map((el, idx) => (
      <Link className="mr-1 " to="/browse" key={idx}>
        <p className="btn-pill-pink show-details__genre-btn mr-1 content-font">{el.name}</p>
      </Link>
    ));
  };

  useEffect(() => {
    genRuntime(runtime);
  }, []);

  return (
    <div className="show-details">
      <div className="show-details__header">
        <div className="show-details__header-content flex">
          <h2 className="show-details__title title-font">{title}</h2>
          <p className="content-font">{runtime && formattedRuntime}</p>
        </div>
      </div>
      <p className="show-details__description content-font ">{overview}</p>

      <div className="show-details__pills flex mt-1">
        <div className="show-details__genres flex">{genres && genGenrePills(genres)}</div>
        <div className="show-details__trailer ">
          <button className="btn-pill-white" onClick={() => (modalOpen ? close() : open())}>
            Trailer
          </button>
        </div>
      </div>

      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {modalOpen && (
          <Modal
            text={<PlayTrailer trailer={'hello'} handleClose={close} />}
            modalOpen={modalOpen}
            handleClose={close}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default MovieDetails;
