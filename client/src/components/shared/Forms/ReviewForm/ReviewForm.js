import React, { useContext, useState } from 'react';
import { ReloadContext } from '../../../../Context/ReloadContext';
import { UserContext } from '../../../../Context/UserContext';
import './ReviewForm.scss';

function ReviewForm({ category, title, id, handleClose }) {
  const { user } = useContext(UserContext);
  const { isReload, setIsReload } = useContext(ReloadContext);

  const [inputs, setInputs] = useState({
    user_id: user.id,
    movie_id: id,
    movie_title: title,
    review_type: category,
    rating: '',
    review: '',
  });

  const { user_id, movie_id, movie_title, review_type, rating, review } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { user_id, movie_id, movie_title, review_type, rating, review };

    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const parsedRes = await res.json();

      setIsReload(!isReload);
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="review-form">
      <form className="review-form__form flex" onSubmit={onSubmitForm} autoComplete="off">
        <input
          className="input-form"
          type="hidden"
          name="user_id"
          placeholder="user_id"
          value={user_id}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="hidden"
          name="movie_id"
          placeholder="movie_id"
          value={movie_id}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="hidden"
          name="movie_title"
          placeholder="movie_title"
          value={movie_title}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="hidden"
          name="review_type"
          placeholder="review_type"
          value={review_type}
          onChange={(e) => onChange(e)}
        />
        <input
          className="input-form"
          type="number"
          name="rating"
          placeholder="1-10"
          min="1"
          max="10"
          value={rating}
          onChange={(e) => onChange(e)}
        />
        <textarea
          className="input-form mt-1"
          type="text"
          name="review"
          placeholder="review"
          cols="30"
          rows="5"
          value={review}
          onChange={(e) => onChange(e)}
        />

        <button className="btn submit btn-search mt-1 mb-1">Submit</button>
      </form>
    </div>
  );
}

export default ReviewForm;
