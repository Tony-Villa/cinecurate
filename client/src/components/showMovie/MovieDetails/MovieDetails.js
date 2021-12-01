import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetails.scss';

function MovieDetails({ title, overview, genres }) {
  const genGenrePills = (genre) => {
    return genre.map((el, idx) => (
      <Link to="/browse" key={idx}>
        <p className="btn-link btn-pill-pink show-details__genre-btn mr-1">{el.name}</p>
      </Link>
    ));
  };

  return (
    <div className="show-details">
      <h2 className="show-details__title title-font">{title}</h2>
      <p className="show-details__description content-font">{overview}</p>

      <div className="show-details__pills flex">
        <div className="show-details__genres flex">{genres && genGenrePills(genres)}</div>
        <div className="show-details__trailer">
          <p>trailer</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
