import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ReloadContext } from '../../../Context/ReloadContext';
import PosterThumb from '../../shared/PosterThumb/PosterThumb';
import './Similar.scss';

function Similar() {
  const [similarMovies, setSimilarMovies] = useState([]);
  const params = useParams();
  const { isReload, setIsReload } = useContext(ReloadContext);

  const getSimilar = async () => {
    const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/similar/${params.id}`);
    const parsedRes = await res.json();
    const data = parsedRes.movies.results;

    setSimilarMovies(data);
  };

  useEffect(() => {
    getSimilar();
  }, [params.id]);

  const genSimilarSet = (movies) => {
    return movies.map((movie, idx) => (
      <Link to={`/movie/${movie.id}`} key={idx}>
        <PosterThumb {...movie} />
      </Link>
    ));
  };

  return (
    <div className="similar mt-2">
      <h1 className="similar__title header-font">Similar Movies</h1>
      {similarMovies.length ? genSimilarSet(similarMovies) : <h3>loading...</h3>}
    </div>
  );
}

export default Similar;
