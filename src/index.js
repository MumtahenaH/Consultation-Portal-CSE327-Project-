 /* all the main pages have been imported here */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppointApp from './components/AppointApp';
import reportWebVitals from './reportWebVitals';
import Cancel from './components/Cancel';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App/>
    <AppointApp />
    <Cancel />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
