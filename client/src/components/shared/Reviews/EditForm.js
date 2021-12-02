import React, { useContext, useEffect, useState } from 'react';
import { ReloadContext } from '../../../Context/ReloadContext';
import { UserContext } from '../../../Context/UserContext';
import '../../shared/Forms/ReviewForm/ReviewForm.scss';

const EditForm = ({ content, handleClose }) => {
  const { user } = useContext(UserContext);
  const { isReload, setIsReload } = useContext(ReloadContext);

  const [inputs, setInputs] = useState({
    // id: review.id,
    // user_id: user.id,
    // movie_id: id,
    // movie_title: title,
    // review_type: review_type,
    rating: content.rating,
    review: content.review,
  });

  const { rating, review } = inputs;

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();

    const body = { rating, review };

    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/${content.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      //   const parsedRes = await res.json()
      setIsReload(!isReload);
      handleClose();
    } catch (err) {
      console.log(err.message);
    }
  };

  // console.log(review.id);

  return (
    <div>
      <h1 class="review-form">{review.review}</h1>
      <form class="review-form__form flex" onSubmit={onSubmitForm} autoComplete="off">
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

        <button className="btn-search submit mt-1 mb-1">Submit</button>
      </form>
    </div>
  );
};

export default EditForm;
