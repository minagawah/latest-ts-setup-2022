import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './base.css';

import { Splash } from './pages/splash';
import { Home } from './pages/home';

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};
