import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import "../Style.css"

const Layout = () => {
  return (
    <>
      <Header />
      <div className="ffc-pages-main">
        <div className="ffc-container">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
