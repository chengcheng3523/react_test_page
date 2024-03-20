import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';
import PersonalPage from './pages/PersonalPage';
import MaterialsPage from './pages/MaterialsPage';
import ItemsList from './pages/ItemsList';
import Login from './pages/Login';

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/mall" />} />
          <Route path="/mall" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/mall/:categoryName" element={<ProductCollectionPage />} />
          <Route path="/:ProductName" element={<ProductPage />} />
          <Route path="/Personal" element={< PersonalPage />} />
          <Route path="/Materials" element={< MaterialsPage />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/ItemsList" element={< ItemsList />} />
          
        </Routes>
      </BrowserRouter>
  );
};

export default App;
