import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Cast.scss';

function Cast({ id }) {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const params = useParams();

  const getCredits = async () => {
    const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/credits/${params.id}`);
    const parsedRes = await res.json();
    const cast = parsedRes.credits.cast;
    const crew = parsedRes.credits.crew;

    setCast(cast);
    setCrew(crew);
  };

  useEffect(() => {
    getCredits();
  }, []);

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
