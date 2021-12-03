import React from 'react';
import './PosterThumb.scss';

const PosterThumb = ({ id, title, poster_path }) => {
  return (
    <div className="poster">
      <img
        className="movie-poster-thumb poster__thumb"
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />
      <div className="poster__title-container">
        <p className="poster__title text-link content-font">{title}</p>
      </div>
    </div>
  );
};

export default PosterThumb;
