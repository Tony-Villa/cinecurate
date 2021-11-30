import { m } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Reviews from '../../components/shared/Reviews/Reviews';
import MovieSection from '../../components/showMovie/MovieSection/MovieSection';
import Similar from '../../components/showMovie/Similar/Similar';
import './ShowMovie.scss';

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
    window.scrollTo(0, 0);
  }, [params.id]);

  return (
    <div className="show">
      <div className="show__top">
        <MovieSection {...movie} />
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
