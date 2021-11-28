import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/shared/Reviews/Reviews';
import MovieSection from '../../components/showMovie/MovieSection/MovieSection';
import Similar from '../../components/showMovie/Similar/Similar';

const ShowMovie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  const getMovie = async () => {
    const res = await fetch(`http://localhost:3737/v1/movies/${params.id}`);
    const parsedRes = await res.json();
    const data = parsedRes.movie;

    setMovie(data);
  };

  useEffect(() => {
    getMovie();
  }, [params.id]);

  return (
    <div className="show">
      <div className="show__top">
        <MovieSection {...movie} />
        {/* <div className="show__poster">
          <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
        </div>
        <h1>{movie && movie.title}</h1> */}
      </div>
      <div className="show__bottom flex">
        <div className="show__reviews three-quarters">
          <Reviews />
        </div>
        <div className="show__similar">
          <Similar />
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;
