import React, { useState } from 'react';

function Searchbar() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <form action="/" method="GET" autocomplete="off" className="movie-query">
        <input className="search-movie" type="text" placeholder="Search movie..." name="q" />
        <button className="confirm-search btn-search">btn</button>
      </form>
    </div>
  );
}

export default Searchbar;
