import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import HomePage from './pages/HomePage';//Home

import PutPage from './From-button/Put-button'; //Company
import PostPage from './From-button/Post-button'; //Post
import DeletePage from './From-button/Delete-button';//Delete
import GetPage from './From-button/Get-button'; //Get
import Login from './From-button/Login'; //Login

import Page01 from './Form-Page/Page01'; // 表1-1
import Page02 from './Form-Page/Page02'; // 表1-2 未完成
import Page002 from './Form-Page/Page002'; // 表2
import Page003 from './Form-Page/Page003'; // 表3
import Page004 from './Form-Page/Page004'; // 表4
import Page005 from './Form-Page/Page005'; // 表5
import Page006 from './Form-Page/Page006'; // 表6
import Page007 from './Form-Page/Page007'; // 表7
import Page008 from './Form-Page/Page008'; // 表8
import Page009 from './Form-Page/Page009'; // 表9
import Page010 from './Form-Page/Page010'; // 表10
import Page011 from './Form-Page/Page011'; // 表11
import Page012 from './Form-Page/Page012'; // 表12
import Page013 from './Form-Page/Page013'; // 表13
import Page014 from './Form-Page/Page014'; // 表14
import Page015 from './Form-Page/Page015'; // 表15
import Page016 from './Form-Page/Page016'; // 表16
import Page017 from './Form-Page/Page017'; // 表17
import Page018 from './Form-Page/Page018'; // 表18
import Page019 from './Form-Page/Page019'; // 表19

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/mall" />} />
          <Route path="/mall" element={<HomePage />} />

          <Route path="/GetPage" element={< GetPage />} /> //  未完成
          <Route path="/PostPage" element={< PostPage />} />  // 未完成
          <Route path="/PutPage" element={< PutPage />} />// 未完成
          <Route path="/DeletePage" element={< DeletePage />} />// 未完成
          <Route path="/Login" element={< Login />} />

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
