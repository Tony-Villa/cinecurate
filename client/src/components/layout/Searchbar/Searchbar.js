import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Searchbar() {
  const [query, setQuery] = useState('');

  const navigate = useNavigate();

  // const submitForm = (query) => {
  //   navigate('/browse', { state: { query } });
  // };

  const submitForm = async (e) => {
    e.preventDefault();
    let page = 1;
    try {
      const response = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/search?q=${query}&page=${page}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });
      const parseResp = await response.json();
      const data = parseResp.movie.results;
      const maxPage = parseResp.movie.total_pages;

      setQuery('');
      navigate('/browse', { state: { query, data, maxPage } });
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <form autoComplete="off" className="movie-query" onSubmit={submitForm}>
        <input
          className="search-movie"
          type="text"
          placeholder="Search movie..."
          name="q"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="confirm-search btn-search">btn</button>
      </form>
    </div>
  );
}

export default Searchbar;
