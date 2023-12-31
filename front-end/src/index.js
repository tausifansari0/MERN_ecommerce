import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import Home from './pages/home';
import CartPage from './pages/cartPage'
import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import { cartReducer, orderReducer, productReducer, userReducer } from './reducers/index';
import{
  BrowserRouter,
  Routes,
  Route,
}from "react-router-dom";
import CheckoutPage from './pages/checkoutPage';
import OrdersPage from './pages/ordersPage';
import ProductDetailsPage from './pages/productDetailsPage';
const store = configureStore(
  { 
    reducer:{
      product:productReducer,
      cart: cartReducer,
      order: orderReducer,
      user: userReducer
    }
  }
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>}>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<CartPage/>}/>
            <Route path="checkout" element={<CheckoutPage/>}/>
            <Route path="myorders" element={<OrdersPage/>}/>
            <Route path="product/:productId" element={<ProductDetailsPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
