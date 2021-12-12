import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import PosterThumb from '../../shared/PosterThumb/PosterThumb';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './ShowWatchlist.scss';

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
      await fetch(`https://api-cinecurate.herokuapp.com/v1/wishlist/${id}`, {
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
        <button
          className="btn btn-delete btn-danger watchlist__delete flex"
          onClick={() => deleteWatchlistItem(movie.id)}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="lg" style={{ color: 'red' }} />
        </button>
      </div>
    ));
  };

  return (
    <div>
      <div className="watchlist">
        <div className="watchlist__container flex">
          {watchlist.length ? genWatchlistSet(watchlist) : <h3>There are no movies in your watchlist.</h3>}
        </div>
      </div>
    </div>
  );
};

export default ShowWatchlist;
