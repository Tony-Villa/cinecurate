import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PosterThumb from '../../shared/PosterThumb/PosterThumb';
import './Carousel.scss';

function Carousel(props) {
  const [movieSet, setMovieSet] = useState([]);

  // const label = list.charAt(0).toUpperCase() + list.slice(1);

  const getMovieSet = async () => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/${props.list.api}`);
      const parsedRes = await res.json();

      const data = parsedRes.movies.results;

      setMovieSet(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getMovieSet();
    // return () => {
    //   cleanup;
    // };
  }, []);

  const genMovieSet = (movies) => {
    return movies.map((movie, idx) => (
      <Link to={`/movie/${movie.id}`} key={idx}>
        <PosterThumb {...movie} />
      </Link>
    ));
  };

  //   <img src="https://image.tmdb.org/t/p/w500/"+{movie.poster_path} alt={movie.title} />

  return (
    <div className="carousel">
      <div className="carousel__items-container">
        <h2 className="carousel__label header-font">{props.list.label} movies:</h2>
        <div className="carousel__items flex">{movieSet.length ? genMovieSet(movieSet) : <h3>loading...</h3>}</div>
      </div>
    </div>
  );
}

export default Carousel;
