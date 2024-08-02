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
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/Settings">Settings</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
