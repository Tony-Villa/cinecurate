import React, { useState } from 'react';
import './Cast.scss';

function Cast({ id }) {
  const [credits, setCredits] = useState([]);

  return (
    <div className="cast">
      <div className="cast__crew">
        <div className="cast_director"></div>
        <div className="cast_writer"></div>
      </div>

      <div className="cast_actors">
        <h1>cast</h1>
        <p>casta</p>
      </div>
    </div>
  );
}

export default Cast;
