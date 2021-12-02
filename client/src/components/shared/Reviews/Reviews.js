import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ReloadContext } from '../../../Context/ReloadContext';
import PostReview from './PostReview';
import './Reviews.scss';

function Reviews({ id, title }) {
  const { isReload, setIsReload } = useContext(ReloadContext);

  const categories = [
    { enum: 'cinematography', display: 'Cinematography' },
    { enum: 'story', display: 'Story' },
    { enum: 'acting', display: 'Acting' },
    { enum: 'art', display: 'Art/Prod Design' },
    { enum: 'sound', display: 'Sound/Music' },
    { enum: 'hmu', display: 'Hair/Make-up' },
    { enum: 'editing', display: 'Editing' },
    { enum: 'vfx', display: 'VFX' },
  ];
  const catLength = categories.length - 1;

  const [reviews, setReviews] = useState([]);
  const [activeCategory, setActiveCategory] = useState('cinematography');

  const params = useParams();

  const getReviews = async () => {
    const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/reviews/${params.id}/${activeCategory}`);
    const parseRes = await res.json();
    const data = parseRes.reviews;

    setReviews(data);
  };

  const getActiveCategory = (active, display) => {
    let opacityNav =
      (active === 'cinematography' && display == 'Cinematography') ||
      (active === 'story' && display == 'Story') ||
      (active === 'acting' && display == 'Acting') ||
      (active === 'art' && display == 'Art/Prod Design') ||
      (active === 'sound' && display == 'Sound/Music') ||
      (active === 'hmu' && display == 'Hair/Make-up') ||
      (active === 'editing' && display == 'Editing') ||
      (active === 'vfx' && display == 'VFX')
        ? { opacity: '1' }
        : { opacity: '.5' };

    return opacityNav;
  };

  useEffect(() => {
    getReviews();
  }, [activeCategory, params.id, isReload]);

  return (
    <div className="review flex mt-2">
      <div className="review__container">
        <h1 className="header-font text-center mb-1">What other cinephiles thought:</h1>
        <div className="review__nav flex">
          {categories.map((el, idx) => (
            <button
              style={getActiveCategory(activeCategory, el.display)}
              key={idx}
              className="btn btn-category  content-font cateogory-link"
              onClick={() => setActiveCategory(el.enum)}
            >
              {el.display}
            </button>
          ))}
        </div>
        <div className="review__options mr-1 flex">
          <PostReview title={title} movie_id={id} category={activeCategory} />
        </div>
        {reviews.map((el, idx) => (
          <div key={idx} className="review__card">
            <div className="review__card__author-info">
              <h4 className="content-font">{el.first_name}</h4>
            </div>
            <div className="review__card__content">
              <h4 className="title-font">{el.rating}</h4>
              <p className="content-font"> {el.review} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Reviews;
