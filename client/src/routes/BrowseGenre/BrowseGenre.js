// import React, { useState } from 'react';
// import { useParams } from 'react-router';
// import '../BrowseMovies/BrowseMovies.scss';

// const BrowseGenre = () => {
//   const params = useParams();

//   const [genreResults, setGenreResults] = useState([]);
//   const [page, setPage] = useState(2);

//   const getQuery = async () => {
//     try {
//       const response = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/search?q=${query}&page=${page}`, {
//         method: 'GET',
//         headers: { 'Content-type': 'application/json' },
//       });
//       const parseResp = await response.json();
//       const data = parseResp.movie.results;
//       const maxPage = parseResp.movie.total_pages;
//       const currentPage = 1;

//       setSearchResults([...searchResults, ...data]);
//       setPage(page + 1);
//     } catch (err) {
//       console.error(err.message);
//     }
//   };

//   const genMovieSet = (movies) => {
//     return movies.map(
//       (movie, idx) =>
//         movie.poster_path && (
//           <Link to={`/movie/${movie.id}`} key={idx}>
//             <PosterThumb {...movie} />
//           </Link>
//         )
//     );
//   };

//   return (
//     <div>
//       <div className="query-results">
//         <div className="query-results__container ">
//           <h1 className="header-font mb-1">Search Rsults</h1>
//           <div className="query-results__items ml-3 flex">
//             {genreResults ? genMovieSet(genreResults) : <h1>No movies found.</h1>}
//           </div>
//           <div className="query-results__load flex">
//             {page !== maxPage && (
//               <button className="btn btn-cta " onClick={() => getQuery()}>
//                 Load More
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BrowseGenre;
