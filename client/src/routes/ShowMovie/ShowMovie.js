import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/shared/Reviews/Reviews';
import MovieSection from '../../components/showMovie/MovieSection/MovieSection';
import Similar from '../../components/showMovie/Similar/Similar';
import './ShowMovie.scss';

const ShowMovie = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();
  const [formattedRuntime, setFormattedRuntime] = useState('');

  const getMovie = async () => {
    const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/${params.id}`);
    const parsedRes = await res.json();
    const data = parsedRes.movie;

    setMovie(data);
  };

  const genRuntime = (time) => {
    const hours = Math.floor(time / 60);
    const mins = time % 60;

    setFormattedRuntime(`${hours}h ${mins}m`);
  };

  useEffect(() => {
    getMovie();
    genRuntime(movie.runtime);
    window.scrollTo(0, 0);
  }, [params.id, movie.runtime]);

  return (
    <div className="show">
      <div className="show__top">
        <MovieSection {...movie} length={formattedRuntime} />
      </div>
      <div className="show__bottom flex">
        <div className="show__reviews flex three-quarters">
          <Reviews {...movie} />
        </div>
        <div className="show__similar">
          <Similar />
        </div>
      </div>
    </div>
  );
};

export default ShowMovie;
