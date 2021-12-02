import React from 'react';
import './CastThumb.scss';

const CastThumb = ({ name, character, profile_path }) => {
  return (
    <div className="cast-thumb">
      <img className="cast-thumb__img" src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />

      <div className="cast-thumb__title-container">
        <p className="cast-thumb__name content-font text-center">{name}</p>
        <p className="cast-thumb__character content-font text-center text-bold">{character}</p>
      </div>
    </div>
  );
};

export default CastThumb;
