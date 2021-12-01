import React from 'react';
import Cast from '../Cast/Cast';
import CtaButtons from '../CtaButtons/CtaButtons';
import MovieDetails from '../MovieDetails/MovieDetails';
import PosterSection from '../PosterSection/PosterSection';

import './MovieInfo.scss';

function MovieInfo(props) {
  return (
    <div className="show-info flex">
      <div className="show-info__left">
        <PosterSection {...props} />
        <CtaButtons {...props} />
      </div>
      <div className="show-info__right">
        <MovieDetails {...props} />
        <Cast />
      </div>
    </div>
  );
}

export default MovieInfo;
