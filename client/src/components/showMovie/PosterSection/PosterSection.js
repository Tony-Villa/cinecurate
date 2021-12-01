import React from 'react';
import './PosterSection.scss';

function PosterSection({ poster_path }) {
  return (
    <div className="show-poster">
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt="" className="show-poster__img " />
    </div>
  );
}

export default PosterSection;
