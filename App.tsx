import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import CelebrationPage from './pages/CelebrationPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/celebrate" element={<CelebrationPage />} />
    </Routes>
  );
}

export default App;