// index.js (React 17 compatible)
import React from 'react';
import ReactDOM from 'react-dom'; // React 17 uses this
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
