import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';//Home
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage'; //首頁

import CompanyPage from './From/CompanyPage'; //Company
import Address from './From/Address';
import MaterialsPage from './From/MaterialsPage';
import ItemsList from './From/ItemsList';
import Login from './From/Login'; //Login

import Page01 from './PostPage/Page01'; // 表1-1
import Page02 from './PostPage/Page02'; // 表1-2 未完成
import Page002 from './PostPage/Page002'; // 表2
import Page003 from './PostPage/Page003'; // 表3
import Page004 from './PostPage/Page004'; // 表4
import Page005 from './PostPage/Page005'; // 表5
import Page006 from './PostPage/Page006'; // 表6
import Page007 from './PostPage/Page007'; // 表7
import Page008 from './PostPage/Page008'; // 表8
import Page009 from './PostPage/Page009'; // 表9
import Page010 from './PostPage/Page010'; // 表10
import Page011 from './PostPage/Page011'; // 表11
import Page012 from './PostPage/Page012'; // 表12
import Page013 from './PostPage/Page013'; // 表13
import Page014 from './PostPage/Page014'; // 表14
import Page015 from './PostPage/Page015'; // 表15
import Page016 from './PostPage/Page016'; // 表16
import Page017 from './PostPage/Page017'; // 表17
import Page018 from './PostPage/Page018'; // 表18
import Page019 from './PostPage/Page019'; // 表19

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>





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
          <Route path="/CompanyPage" element={<CompanyPage />} />
          <Route path="/Address" element={< Address />} />
          <Route path="/MaterialsPage" element={< MaterialsPage />} />
          <Route path="/Login" element={< Login />} />
          <Route path="/ItemsList" element={< ItemsList />} />

          
          <Route path="/Page01" element={< Page01 />} />  
          <Route path="/Page02" element={< Page02 />} />
          <Route path="/Page002" element={< Page002 />} />
          <Route path="/Page003" element={< Page003 />} />
          <Route path="/Page004" element={< Page004 />} />
          <Route path="/Page005" element={< Page005 />} />
          <Route path="/Page006" element={< Page006 />} />
          <Route path="/Page007" element={< Page007 />} />
          <Route path="/Page008" element={< Page008 />} />
          <Route path="/Page009" element={< Page009 />} />
          <Route path="/Page010" element={< Page010 />} />
          <Route path="/Page011" element={< Page011 />} />
          <Route path="/Page012" element={< Page012 />} />
          <Route path="/Page013" element={< Page013 />} />
          <Route path="/Page014" element={< Page014 />} />
          <Route path="/Page015" element={< Page015 />} />
          <Route path="/Page016" element={< Page016 />} />
          <Route path="/Page017" element={< Page017 />} />
          <Route path="/Page018" element={< Page018 />} />
          <Route path="/Page019" element={< Page019 />} />

         

          
        </Routes>
      </BrowserRouter>
  );
};

export default App;
