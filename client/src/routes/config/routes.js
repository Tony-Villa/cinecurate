import React from 'react';
import { Routes, Route } from 'react-router-dom';
import BrowseMovies from '../BrowseMovies/BrowseMovies';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ShowMovie from '../ShowMovie/ShowMovie';

export default (
  <Routes>
    <Route index exact path="/" element={<Home />} />
    <Route path="/movie/:id" element={<ShowMovie />} />
    <Route path="/profile/:user_id" element={<Profile />} />
    <Route path="/browse" element={<BrowseMovies />} />
  </Routes>
);
