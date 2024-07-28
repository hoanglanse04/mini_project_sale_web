import React from 'react';
import ReactDOM from 'react-dom/client';
import './base.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter} from 'react-router-dom'
import { AuthProvider } from '../src/Context/AuthContext';
import { CartProvider } from '../src/Context/CartContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <AuthProvider>
    <CartProvider>
        <App />
    </CartProvider>
  </AuthProvider>,
 </BrowserRouter>

);
reportWebVitals();
