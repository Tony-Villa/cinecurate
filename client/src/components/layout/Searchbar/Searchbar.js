import React, { useState } from 'react';

function Searchbar() {
  const [query, setQuery] = useState('');

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/search?q=${query}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });

      const parseResp = await response.json();

      console.log(parseResp);
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
