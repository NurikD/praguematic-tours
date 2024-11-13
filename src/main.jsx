// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Quiz from './Quiz';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Главная страница */}
        <Route path="/quiz" element={<Quiz />} /> {/* Страница Quiz */}
      </Routes>
    </Router>
  </React.StrictMode>
);
