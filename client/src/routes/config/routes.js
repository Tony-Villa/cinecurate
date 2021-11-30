import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Home/Home';
import Profile from '../Profile/Profile';
import ShowMovie from '../ShowMovie/ShowMovie';

export default (
  <Routes>
    <Route index exact path="/" element={<Home />} />
    <Route path="/movie/:id" element={<ShowMovie />} />
    <Route path="/profile/:username" element={<Profile />} />
  </Routes>
);
