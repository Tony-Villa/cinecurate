import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PosterThumb from '../../shared/PosterThumb/PosterThumb';

const ShowWatchlist = () => {
  const [watchlist, setWatchlist] = useState([]);
  const params = useParams();

  const getWatchlistSet = async () => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/wishlist/${params.user_id}`);
      const parsedRes = await res.json();

      const data = parsedRes.wishlist;

      setWatchlist(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteWatchlistItem = async (id) => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/wishlist/${id}`, {
        method: 'DELETE',
      });

      setWatchlist(watchlist.filter((watch) => watch.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getWatchlistSet();
    // return () => {
    //   cleanup;
    // };
  }, []);

  const genWatchlistSet = (movies) => {
    return movies.map((movie, idx) => (
      <div key={idx}>
        <Link to={`/movie/${movie.movie_id}`}>
          <div className="watchlist__item">
            <PosterThumb title={movie.movie_title} poster_path={movie.poster} />
          </div>
        </Link>
        <button className="btn-delete" onClick={() => deleteWatchlistItem(movie.id)}>
          Delete
        </button>
      </div>
    ));
  };

  return (
    <div>
      <h1>this is watchlist</h1>
      <div className="watchlist">
        <div className="watchlist__container flex">
          {watchlist.length ? genWatchlistSet(watchlist) : <h3>There are no movies in your watchlist.</h3>}
          {/* <PosterThumb /> */}
        </div>
      </div>
    </div>
  );
};

export default ShowWatchlist;
