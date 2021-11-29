import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Reviews() {
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
    const res = await fetch(`http://localhost:3737/v1/reviews/${params.id}/${activeCategory}`);
    const parseRes = await res.json();
    const data = parseRes.reviews;

    setReviews(data);
  };

  useEffect(() => {
    getReviews();
  }, [activeCategory, params.id]);

  return (
    <div>
      <h1>Reviews</h1>
      <div className="category-nav flex">
        {categories.map((el, idx) => (
          <span>
            <button key={idx} className="cateogory-link" onClick={() => setActiveCategory(el.enum)}>
              {el.display}
            </button>
            {/* {idx < catLength ? <p> | </p> : null} */}
          </span>
        ))}
      </div>
      {reviews.map((el, idx) => (
        <div key={idx} className="review-card">
          <div className="review-card__author-info">
            <h4 className="content-font">{el.first_name}</h4>
          </div>
          <div className="review-card__review-content">
            <h4 className="title-font">{el.rating}</h4>
            <p className="content-font"> {el.review} </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
