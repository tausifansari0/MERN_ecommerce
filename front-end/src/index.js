import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { productReducer } from './reducers';

const store = configureStore(
  { 
    reducer:{
      product:productReducer
    }
  }
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);
