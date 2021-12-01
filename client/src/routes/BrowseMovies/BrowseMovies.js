import React, { useState } from 'react';
import { useLocation } from 'react-router';

const BrowseMovies = () => {
  const {
    state: { query, data, maxPage },
  } = useLocation();

  console.log(query);
  console.log(data);
  console.log(maxPage);

  const [searchResults, setSearchResults] = useState(data);

  //   const handlePagination = () => {
  //     setPage(page + 1);
  //   };

  return (
    <div>
      <h1>I am browse page</h1>
      <p>hello</p>
      {/* <p>{page}</p> */}
      {/* {page !== maxPage && <button onClick={() => handlePagination()}>Load More</button>} */}
    </div>
  );
};

export default BrowseMovies;
