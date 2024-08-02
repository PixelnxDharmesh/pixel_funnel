// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="ffc-header-wrapper">
      <div className="ffc-container">
        <div className="ffc-header-parent">
          <div className="ffc-logo">
            <Link to="/">Flexi Funnels Clone</Link>
          </div>
          <div className="ffc-nav-wr">
            <ul className="ffc-nav-list">
              <li className="ffc-nav-item">
                <Link to="/products">Products</Link>
              </li>
              <li className="ffc-nav-item">
                <Link to="">Settings</Link>
              </li>
              <li className="ffc-nav-item">
                <Link to="">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="ffc-profile-item">
            <a href="">
              <div className="ffc-profile-logo">
                <span>A</span>
              </div>
              <div className="ffc-profile-name">
                <h5>Ann Chovey</h5>
                <p>User</p>
              </div>
            </a>
            <div className="ffc-profile-info">
              <ul className="ffc-info-list">
                <li className="ffc-info-item">
                  <a href="">Info</a>
                </li>
                <li className="ffc-info-item">
                  <a href="">Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
