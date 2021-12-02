import { AnimatePresence } from 'framer-motion';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ReloadContext } from '../../../Context/ReloadContext';
import Modal from '../Modal/Modal';
import EditReview from './EditReview';
import './UserReviews.scss';

const UserReviews = () => {
  const { isReload, setIsReload } = useContext(ReloadContext);
  const [reviews, setReviews] = useState([]);

  const params = useParams();

  const getReviews = async () => {
    const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/${params.user_id}`);
    const parseRes = await res.json();
    const data = parseRes.reviews;

    setReviews(data);
  };

  const deleteReview = async (id) => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/${id}`, {
        method: 'DELETE',
      });

      setReviews(reviews.filter((review) => review.id !== id));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getReviews();
  }, [params.id, isReload]);

  // console.log(reviews[0]);

  return (
    <div className="user-review flex">
      <div className="user-review__container">
        <h1>Your reviews:</h1>
        {reviews.map((el, idx) => (
          <div key={idx} className="user-review__card mt-2">
            <div className="user-review__card__movie-info flex">
              <h4 className="title-font text-bold user-review__movie-title ">
                <Link style={{ textDecoration: 'none', color: '1c1c1c' }} to={`/movie/${el.movie_id}`}>
                  {el.movie_title}
                </Link>{' '}
                | {el.review_type}
              </h4>
            </div>
            <div className="user-review__card__author-info">
              <h4 className="content-font">{el.first_name}</h4>
            </div>
            <div className="user-review__card__content">
              <h4 className="title-font">Rating: {el.rating}</h4>
              <p className="content-font"> {el.review} </p>
            </div>
            <div className="user-review__user-options flex">
              <EditReview className="btn-edit" content={el} />
              <button className="btn-delete" onClick={() => deleteReview(el.id)}>
                delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserReviews;
