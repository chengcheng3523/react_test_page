import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import ProductCollectionPage from './pages/ProductCollectionPage';
import ProductPage from './pages/ProductPage';

import CompanyPage from './From/CompanyPage';
import Address from './From/Address';
import MaterialsPage from './From/MaterialsPage';
import ItemsList from './From/ItemsList';
import Login from './From/Login';


import Production1_2 from './From/Production1_2';
import SRF2 from './From/SRF2';
import CWR3 from './From/CWR3';
import NPR4 from './From/NPR4';
import MaterialsCode571013 from './From/MaterialsCode571013';
import FAR6 from './From/FAR6';
import FIOR8 from './From/FIOR8';
import PEM9 from './From/PEM9';
import IBEMR11 from './From/IBEMR11';
import OMUR12 from './From/OMUR12';
import OMIOR14 from './From/OMIOR14';
import VF_MRCMR15 from './From/VF_MRCMR15';
import AMC_MRCCMR16 from './From/AMC_MRCCMR16';
import HPPR17 from './From/HPPR17';
import DOR18 from './From/DOR18';
import PSR19 from './From/PSR19';
import Others from './From/Others';



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

          
          <Route path="/Production1_2" element={< Production1_2 />} />
          <Route path="/SRF2" element={< SRF2 />} />
          <Route path="/CWR3" element={< CWR3 />} />
          <Route path="/NPR4" element={< NPR4 />} />
          <Route path="/MaterialsCode571013" element={< MaterialsCode571013 />} />
          <Route path="/FAR6" element={< FAR6 />} />
          <Route path="/FIOR8" element={< FIOR8 />} />
          <Route path="/PEM9" element={< PEM9 />} />
          <Route path="/IBEMR11" element={< IBEMR11 />} />
          <Route path="/OMUR12" element={< OMUR12 />} />
          <Route path="/OMIOR14" element={< OMIOR14 />} />
          <Route path="/VF_MRCMR15" element={< VF_MRCMR15 />} />
          <Route path="/AMC_MRCCMR16" element={< AMC_MRCCMR16 />} />
          <Route path="/HPPR17" element={< HPPR17 />} />
          <Route path="/DOR18" element={< DOR18 />} />
          <Route path="/PSR19" element={< PSR19 />} />
          <Route path="/Others" element={< Others />} />
         

          
        </Routes>
      </BrowserRouter>
  );
};

export default App;
