import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { cartReducer, productReducer } from './reducers/index';

const store = configureStore(
  { 
    reducer:{
      product:productReducer,
      cart: cartReducer
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
