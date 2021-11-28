import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PosterThumb from '../../shared/PosterThumb/PosterThumb';

function Carousel() {
  const [movieSet, setMovieSet] = useState([]);

  const getMovieSet = async () => {
    try {
      const res = await fetch(`http://localhost:3737/v1/movies/popular`);
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
    <div className="carousel flex">
      <h3>todo: make this a flex container that is scrollable</h3>
      {movieSet.length ? genMovieSet(movieSet) : <h3>loading...</h3>}
    </div>
  );
}

export default Carousel;
