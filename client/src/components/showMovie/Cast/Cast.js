import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CastThumb from '../../shared/CastThumb/CastThumb';
import './Cast.scss';

const Cast = ({ id }) => {
  const [cast, setCast] = useState([]);
  const [crew, setCrew] = useState([]);
  const [director, setDirector] = useState([]);
  const [writer, setWriter] = useState([]);

  const params = useParams();

  const getCredits = async () => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/credits/${params.id}`);
      const parsedRes = await res.json();
      const castArr = parsedRes.credits.cast;
      const crewArr = parsedRes.credits.crew;

      const directorArr = crewArr.filter((el) => el.job === 'Director');

      const writerArr = crewArr.filter((el) => el.job === 'Writer');

      console.log(directorArr);

      setCast(castArr);
      setCrew(crewArr);
      setDirector(directorArr);
      setWriter(writerArr);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getCredits();
  }, []);

  const genDirector = (data) => {
    return data.map((el, idx) => {
      <p key={idx} className="text-content">
        {el.name}
      </p>;
    });
  };

  const genCast = (cast) => {
    return cast.map((el, idx) => (
      <div key={idx}>
        {idx < 4 && (
          <div>
            <CastThumb {...el} />
          </div>
        )}
      </div>
    ));
  };

  // console.log(genDirector(director));
  console.log(director);

  return (
    <div className="cast mt-1">
      <div className="cast__crew">
        <div className="cast__director mb-1">
          <div className="flex">
            <div className="cast__title">
              <p className="text-bold content-font">Director</p>
            </div>
            <div className="cast__crew-member ml-1">
              <p className="content-font">TODO: Get Director</p>
            </div>
          </div>
        </div>
        <div className="cast__writer">
          <div className="flex">
            <div className="cast__title">
              <p className="text-bold content-font">Writer</p>
            </div>
            <div className="cast__crew-member ml-1">
              <p className="content-font">TODO: Get Writer </p>
            </div>
          </div>
        </div>
      </div>

      <div className="cast__actors-container mt-1">
        <h1 className="header-font text-thin">Cast</h1>
        <div className="cast__display-actors flex">{cast && genCast(cast)}</div>
      </div>
    </div>
  );
};

export default Cast;
