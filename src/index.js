import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import models from "./public/data/model1.json"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App models={models} />
  </React.StrictMode>
);

