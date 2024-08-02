// src/components/AppRouting.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import CardsList from './CardsList';
import Setting from './Setting';


function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<CardsList />} />
          <Route path="Setting" element={<Setting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;
