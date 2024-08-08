import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import CardsList from './CardsList';
import Settings from './Settings';
import Login from './Login';
import Signup from './Signup';


function AppRouting() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="products" element={<CardsList />} />
          <Route path="Settings" element={<Settings />} /> 
          <Route path="login" element={<Login />} /> 
          <Route path="signup" element={<Signup />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouting;

