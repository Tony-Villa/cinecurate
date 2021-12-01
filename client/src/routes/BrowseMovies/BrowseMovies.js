import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';

const BrowseMovies = () => {
  const {
    state: { query, data, maxPage },
  } = useLocation();

  const [searchResults, setSearchResults] = useState(data);
  const [page, setPage] = useState(1);

  const getQuery = async () => {
    try {
      const response = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/search?q=${query}&page=${page}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });
      const parseResp = await response.json();
      const data = parseResp.movie.results;
      const maxPage = parseResp.movie.total_pages;
      const currentPage = 1;

      setSearchResults([...searchResults, ...data]);
      setPage(page + 1);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div>
      <h1>I am browse page</h1>
      <p>hello</p>
      <p>{page}</p>
      {page !== maxPage && <button onClick={() => getQuery()}>Load More</button>}
    </div>
  );
};

export default BrowseMovies;
