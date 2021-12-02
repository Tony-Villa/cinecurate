import React from 'react';
import MovieGraph from '../../shared/MovieGraph/MovieGraph';
import MovieInfo from '../MovieInfo/MovieInfo';
import './MovieSection.scss';

function MovieSection(props) {
  // console.log(props);

  return (
    <div className="movie-section flex mt-2 mb-4">
      <div className="movie-section__img-mask"></div>
      {props && (
        <img
          className="movie-section__backdrop"
          src={`https://image.tmdb.org/t/p/original/${props.backdrop_path}`}
          alt={`${props.title} backdrop`}
        />
      )}
      <div className="movie-section__info">
        <MovieInfo {...props} />
      </div>
      <div className="movie-section__graph">
        <MovieGraph {...props} />
      </div>
    </div>
  );
}

export default MovieSection;
