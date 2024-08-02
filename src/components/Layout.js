// src/components/Layout.js
import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import "../Style.css"

const Layout = () => {
  return (
    <>
      <Header />
      <nav>
        <ul>
          <li>
            <Link to="/"></Link>
          </li>
          <li>
            <Link to="/product"></Link>
          </li>
          <li>
            <Link to="/Setting"></Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
