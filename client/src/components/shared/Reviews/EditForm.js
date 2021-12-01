import React, { useContext, useState } from 'react';
import { ReloadContext } from '../../../Context/ReloadContext';
import { UserContext } from '../../../Context/UserContext';

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
      const res = await fetch(`http://localhost:3737/v1/reviews/${content.id}`, {
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
      <h1>{review.review}</h1>
      <form onSubmit={onSubmitForm} autoComplete="off">
        {/* <input
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
        /> */}
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
          className="input-form"
          type="text"
          name="review"
          placeholder="review"
          value={review}
          onChange={(e) => onChange(e)}
        />

        <button className="btn submit">Submit</button>
      </form>
    </div>
  );
};

export default EditForm;
