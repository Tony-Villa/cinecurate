import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import AnalyzeGraph from '../../components/Analyze/AnalyzeGraph/AnalyzeGraph';
import './Analyze.scss';

const Analyze = () => {
  const navigate = useNavigate();

  const {
    state: { currentMovies },
  } = useLocation();

  const [randNum, setRandNum] = useState(null);

  //   console.log(currentMovies);

  const displayMovies = (movies, num = null) => {
    if (Number.isInteger(num)) {
      let randNum = Math.floor(Math.random() * num - 1);
    }

    return movies.map((movie, idx) =>
      idx === randNum ? (
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
          <div className="winner analyze__winner"></div>
        </div>
      ) : (
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
      )
    );
  };

  const randomMovie = (arr) => {
    setRandNum(Math.floor(Math.random() * arr.length));
  };

  // const handleBack = () => {
  //   navigate(-1);
  // };

  return (
    <div className="analyze">
      <h1 className="content-font text-center mt-1">Analyze</h1>
      <div className="analyze__top">
        <div className="analyze__graph flex">
          <AnalyzeGraph currentMovies={currentMovies} />
        </div>

        <div className="analyze__back-btn flex">
          <h4 className="content-font text-center">Want to compare {currentMovies[0].title} to other movies?</h4>
          <button className="btn-search mt-1" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>

        <div className="analyze__choose-btn flex">
          <h4 className="content-font text-center">Can't Decide? Let us choose for you!</h4>
          <button className="btn-search mt-1" onClick={() => randomMovie(currentMovies)}>
            Spin!
          </button>
        </div>
      </div>
      <div className="analyze__all-movies flex">
        {currentMovies ? displayMovies(currentMovies, randNum) : <h2 className="header-font">No movies to analyze</h2>}
      </div>
    </div>
  );
};

export default Analyze;
