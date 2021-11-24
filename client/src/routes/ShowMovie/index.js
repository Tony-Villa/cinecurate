import React from 'react';
import ShowMovie from './ShowMovie';

export default () => {
  useEffect(() => {
    const fetchReviews = async (url, category) => {
      const result = await fetch(url);
    };
    return () => {
      cleanup;
    };
  }, []);

  return <ShowMovie />;
};
