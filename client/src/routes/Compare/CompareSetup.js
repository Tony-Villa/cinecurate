import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import './CompareSetup.scss';
import PosterThumb from '../../components/shared/PosterThumb/PosterThumb';

const CompareSetup = () => {
  const {
    state: { id, poster_path, title },
  } = useLocation();
  const navigate = useNavigate();

  const [currentMovies, setCurrentMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [queryResults, setQueryResults] = useState([]);
  const [page, setPage] = useState(0);
  const [maxPage, setMaxPage] = useState(5);

  const initCurrent = () => {
    setCurrentMovies([
      {
        id,
        title,
        poster_path,
      },
    ]);
  };

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

      setQueryResults(data);
      setPage(1);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getQuery = async () => {
    let page = 2;
    try {
      const response = await fetch(`https://api-cinecurate.herokuapp.com/v1/movies/search?q=${query}&page=${page}`, {
        method: 'GET',
        headers: { 'Content-type': 'application/json' },
      });
      const parseResp = await response.json();
      const data = parseResp.movie.results;
      const queryMaxPage = parseResp.movie.total_pages;
      const currentPage = 1;

      setQueryResults([...queryResults, ...data]);
      setMaxPage(queryMaxPage);
      setPage(page + 1);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    initCurrent();
  }, []);

  const handleAdd = ({ title, id, poster_path }) => {
    let newAddition = { title, id, poster_path };

    setCurrentMovies([...currentMovies, newAddition]);
  };

  const handleDelete = (movies, current) => {
    const updatedList = movies.filter((movie) => movie.id !== current.id);

    setCurrentMovies(updatedList);
  };

  const genCurrentSet = (movies) => {
    return movies.map((movie, idx) => (
      <div key={idx}>
        <div className="watchlist__item">
          <PosterThumb title={movie.title} poster_path={movie.poster_path} />
        </div>
        <button
          className="btn btn-delete btn-danger watchlist__delete flex"
          onClick={() => handleDelete(currentMovies, movie)}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="lg" style={{ color: 'red' }} />
        </button>
      </div>
    ));
  };

  const genQueryResults = (movies) => {
    return movies.map(
      (movie, idx) =>
        movie.poster_path && (
          <div key={idx}>
            <div className="watchlist__item">
              <PosterThumb title={movie.title} poster_path={movie.poster_path} />
            </div>
            <div className="compare__option flex mb-3">
              {currentMovies.length < 4 && (
                <button onClick={() => handleAdd(movie)} className=" btn-cta btn-center compare__add ">
                  Add
                </button>
              )}
            </div>
          </div>
        )
    );
  };

  const sendToAnalyze = () => {
    navigate('/analyze', { state: { currentMovies } });
  };

  // console.log(queryResults);
  // console.log(currentMovies);

  return (
    <div className="compare">
      <div className="compare__info mt-2">
        <h1 className="text-center header-font">Welcome to Compare!</h1>
        <h4 className="content-font text-center">Choose up to 3 more movies to compare</h4>
      </div>
      <div className="compare__current flex">
        {currentMovies ? (
          genCurrentSet(currentMovies)
        ) : (
          <h3 className="content-font text-center">Nothing to compare</h3>
        )}
      </div>
      <div className="compare__finished flex">
        <button onClick={() => sendToAnalyze()} className="btn-search compare__finish-btn">
          Finished and Compare!
        </button>
      </div>
      <div className="compare__search">
        <div className="compare__search-input flex">
          <form autoComplete="off" className="movie-query mt-2" onSubmit={submitForm}>
            <input
              className="search-movie"
              type="text"
              placeholder="Search movie..."
              name="q"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="confirm-search btn-search compare__search-btn">Search</button>
          </form>
        </div>
        <div className="compare__search-results mt-2 flex">
          {queryResults.length > 0 ? (
            genQueryResults(queryResults)
          ) : (
            <div className="compare__no-results">
              <h3 className="content-font text-center">No Results</h3>
            </div>
          )}
        </div>
        <div className="query-results__load flex">
          {page !== maxPage && page !== 0 && (
            <button className="btn btn-cta " onClick={() => getQuery()}>
              Load More
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompareSetup;
