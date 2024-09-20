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

import InfoPage from './PostPage/InfoPage'; // 表1-1
import PlanPage from './PostPage/PlanPage'; // 表1-2 未完成
import SeedPage from './PostPage/SeedPage'; // 表2
import WorkPage from './PostPage/WorkPage'; // 表3
import SolutionPage from './PostPage/SolutionPage'; // 表4
import MapPage from './PostPage/MapPage'; // 表5
import FertPage from './PostPage/FertPage'; // 表6
import PesticidePage from './PostPage/PesticidePage'; // 表7
import OtherPage from './PostPage/OtherPage'; // 表8
import FacilityPage from './PostPage/FacilityPage'; // 表9
import EquipPage from './PostPage/EquipPage'; // 表10
import HarvestPage from './PostPage/HarvestPage'; // 表11
import DryPage from './PostPage/DryPage'; // 表12
import PackPage from './PostPage/PackPage'; // 表13
import HealthPage14 from './PostPage/HealthPage14'; // 表14
import TracePage from './PostPage/TracePage'; // 表15
import FeedPage from './PostPage/FeedPage'; // 表16
import RecallPage from './PostPage/RecallPage'; // 表17
import PurchasePage from './PostPage/PurchasePage'; // 表18
import InspectPage from './PostPage/InspectPage'; // 表19

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

          
          <Route path="/InfoPage" element={< InfoPage />} />  
          <Route path="/PlanPage" element={< PlanPage />} />
          <Route path="/SeedPage" element={< SeedPage />} />
          <Route path="/WorkPage" element={< WorkPage />} />
          <Route path="/SolutionPage" element={< SolutionPage />} />
          <Route path="/MapPage" element={< MapPage />} />
          <Route path="/FertPage" element={< FertPage />} />
          <Route path="/PesticidePage" element={< PesticidePage />} />
          <Route path="/OtherPage" element={< OtherPage />} />
          <Route path="/FacilityPage" element={< FacilityPage />} />
          <Route path="/EquipPage" element={< EquipPage />} />
          <Route path="/HarvestPage" element={< HarvestPage />} />
          <Route path="/DryPage" element={< DryPage />} />
          <Route path="/PackPage" element={< PackPage />} />
          <Route path="/HealthPage14" element={< HealthPage14 />} />
          <Route path="/TracePage" element={< TracePage />} />
          <Route path="/FeedPage" element={< FeedPage />} />
          <Route path="/RecallPage" element={< RecallPage />} />
          <Route path="/PurchasePage" element={< PurchasePage />} />
          <Route path="/InspectPage" element={< InspectPage />} />

         

          
        </Routes>
      </BrowserRouter>
  );
};

export default App;
