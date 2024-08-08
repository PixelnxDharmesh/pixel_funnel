import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import Header from './Header';
import "../style/Style.css"


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
