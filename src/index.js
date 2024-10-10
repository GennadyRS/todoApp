import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="header"><h1><i>Список задач</i></h1></div>
    <App />
  </React.StrictMode>
);


