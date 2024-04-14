import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';  // Assuming App.js is in the same folder as index.js
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
