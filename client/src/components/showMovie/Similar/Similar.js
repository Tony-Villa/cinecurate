import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import PosterThumb from '../../shared/PosterThumb/PosterThumb';

function Similar() {
  const [similarMovies, setSimilarMovies] = useState([]);
  const params = useParams();

  const getSimilar = async () => {
    const res = await fetch(`http://localhost:3737/v1/movies/similar/${params.id}`);
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
    <div>
      <h1>Similar Movies</h1>
      {similarMovies.length ? genSimilarSet(similarMovies) : <h3>loading...</h3>}
    </div>
  );
}

export default Similar;
