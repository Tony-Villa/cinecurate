import React from 'react';
import { useLocation } from 'react-router';
import AnalyzeGraph from '../../components/Analyze/AnalyzeGraph/AnalyzeGraph';
import './Analyze.scss';

const Analyze = () => {
  const {
    state: { currentMovies },
  } = useLocation();

  console.log(currentMovies);

  const displayMovies = (movies) => {
    return movies.map((movie, idx) => (
      <div key={idx} className="analyze__single-movie flex">
        <div className="analyze__movie-title">
          <h2 className="title-font text-center">{movie.title}</h2>
        </div>
        <div className="analyze__movie-poster">
          <img
            className="movie-poster-thumb poster__thumb"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      </div>
    ));
  };

  return (
    <div className="analyze">
      <h1 className="content-font text-center mt-1">Analyze</h1>
      <div className="analyze__graph flex">
        <AnalyzeGraph currentMovies={currentMovies} />
      </div>
      <div className="analyze__all-movies flex">
        {currentMovies ? displayMovies(currentMovies) : <h2 className="header-font">No movies to analyze</h2>}
      </div>
    </div>
  );
};

export default Analyze;
