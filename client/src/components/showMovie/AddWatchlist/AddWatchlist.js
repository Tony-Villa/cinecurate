import React, { useContext } from 'react';
import { UserContext } from '../../../Context/UserContext';

const AddWatchlist = (props) => {
  const { user } = useContext(UserContext);

  const inputs = {
    movie_title: props.title,
    movie_id: props.id,
    poster: props.poster_path,
    user_id: user.id,
  };

  const { movie_title, movie_id, poster, user_id } = inputs;

  const addMovie = async (e) => {
    e.preventDefault();

    const body = { movie_title, movie_id, poster, user_id };

    try {
      const res = await fetch(`http://localhost:3737/v1/wishlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <button onClick={(e) => addMovie(e)} className="btn btn-cta">
      Add to Watchlist
    </button>
  );
};

export default AddWatchlist;
