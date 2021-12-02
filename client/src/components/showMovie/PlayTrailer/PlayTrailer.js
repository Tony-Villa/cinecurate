import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PlayTrailer = () => {
  const params = useParams();
  const id = params.id;

  const [trailer, setTrailer] = useState([]);

  // const trailer = 'dQw4w9WgXcQ';
  const getTrailer = async () => {
    try {
      const res = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/trailers/${id}`);
      const parsedRes = await res.json();
      const trailers = parsedRes.trailers.results;

      if (trailers.length < 1) {
        setTrailer('dQw4w9WgXcQ');
      }

      trailers.map((el, i) => {
        if (el.name === 'Official Trailer') {
          setTrailer(el.key);
        } else {
          setTrailer('dQw4w9WgXcQ');
        }
      });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${trailer}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default PlayTrailer;
