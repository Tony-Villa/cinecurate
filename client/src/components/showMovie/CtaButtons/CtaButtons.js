import React from 'react';
import './CtaButtons.scss';

function CtaButtons() {
  return (
    <div className="cta-container flex">
      <button className="watchlist">Add to Watchlist</button>
      <button className="compare">Compare</button>
    </div>
  );
}

export default CtaButtons;
