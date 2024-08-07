import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from './Popup'; // Make sure the path to the Popup component is correct

const Settings = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const [settingsVisibility, setSettingsVisibility] = useState({});
  const [popupType, setPopupType] = useState(null);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleSettings = (sectionId) => {
    setSettingsVisibility((prevVisibility) => ({
      ...prevVisibility,
      [sectionId]: !prevVisibility[sectionId],
    }));
  };

  const openPopup = (type) => {
    setPopupType(type);
  };

  const closePopup = () => {
    setPopupType(null);
  };

  return (
    <div className="ffc-tab-wrapper">
      <div className="ffc-container">
        <div className="ffc-section-heading">
          <Link to="/" className="ffc-back-btn">
            <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 447.243 447.243">
              <g>
                <path d="M420.361 192.229a31.967 31.967 0 0 0-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0 0 18.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 0 0-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 0 0 2.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 0 0-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z" data-original="#000000"></path>
              </g>
            </svg>
          </Link>
          <h3 className="ffc-heading">Setting</h3>
        </div>

        <form className="ffc-tab-wr" action="" method="">
          <div className="ffc-tab-list tab-menu">
            <ul>
              <li><a href="javascript:;" className={`tab-a ${activeTab === 'tab1' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab1')} data-id="tab1">Autoresponder Integrations</a></li>
              <li><a href="javascript:;" className={`tab-a ${activeTab === 'tab2' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab2')} data-id="tab2">Payment Integrations</a></li>
              <li><a href="javascript:;" className={`tab-a ${activeTab === 'tab3' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab3')} data-id="tab3">Email Settings</a></li>
            </ul>
          </div>
          <div className="ffc-tab-item tab-deta">
            <div className={`tab ${activeTab === 'tab1' ? 'tab-active' : ''}`} data-id="tab1">
              <div className="ffc-btn-wr ffc-btn-right ffc-btn-2">
                <button type="button" className="ffc-btn" onClick={() => openPopup('addAutoresponder')}>Add Autoresponder</button>
              </div>
              <div className="row mt-20">
                <div className="col-xl-6 col-lg-6 col-sm-12">
                  <div className="ffc-email-intg-wr">
                    <div className="ffc-email-intg-encap">
                      <div className="ffc-email-intg-img">
                        <img src="/images/aweber.png" alt="" />
                      </div>
                      <div className="ffc-email-intg-info">
                        <span className="ffc-email-intg-name">
                          demo@company.com
                        </span>
                        <button type="button" className="ffc-btn" onClick={() => toggleSettings('autoresponder1')}>Setting</button>
                      </div>
                    </div>
                    {settingsVisibility['autoresponder1'] && (
                      <div className="ffc-email-intg-input">
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Account Name
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="text" placeholder="Enter your account name" name="title" value="demo@company.com" autoComplete="off" />
                        </div>
                        <div className="ffc-btn-iintg-infon">
                          <button type="button" className="ffc-btn ffc-btn-01">Disable</button>
                          <button type="button" className="ffc-btn ffc-btn-02">Remove</button>
                          <button type="button" className="ffc-btn ffc-btn-03">Update</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab ${activeTab === 'tab2' ? 'tab-active' : ''}`} data-id="tab2">
              <div className="ffc-btn-wr ffc-btn-right ffc-btn-2 mb-20">
                <button type="button" className="ffc-btn" onClick={() => openPopup('addPayment')}>Add Payment</button>
              </div>
              <div className="row">
                <div className="col-xl-6 col-lg-6 col-sm-12">
                  <div className="ffc-email-intg-wr">
                    <div className="ffc-email-intg-encap">
                      <div className="ffc-email-intg-img">
                        <img src="/images/stripe.png" alt="" />
                      </div>
                      <div className="ffc-email-intg-info">
                        <span className="ffc-email-intg-name">
                          demo@company.com
                        </span>
                        <button type="button" className="ffc-btn" onClick={() => toggleSettings('payment1')}>Setting</button>
                      </div>
                    </div>
                    {settingsVisibility['payment1'] && (
                      <div className="ffc-email-intg-input">
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Account Name
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="text" placeholder="Enter your account name" name="title" value="demo@company.com" autoComplete="off" />
                        </div>
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Key
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="text" placeholder="Enter your account key" name="title" value="Key" autoComplete="off" />
                        </div>
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Token
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="text" placeholder="Enter your account token" name="title" value="Token" autoComplete="off" />
                        </div>
                        <div className="ffc-btn-iintg-infon">
                          <button type="button" className="ffc-btn ffc-btn-01">Disable</button>
                          <button type="button" className="ffc-btn ffc-btn-02">Remove</button>
                          <button type="button" className="ffc-btn ffc-btn-03">Update</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className={`tab ${activeTab === 'tab3' ? 'tab-active' : ''}`} data-id="tab3">
              <div className="ffc-btn-wr ffc-btn-right ffc-btn-2">
                <button type="button" className="ffc-btn" onClick={() => openPopup('createEmail')}>Create Email</button>
              </div>
              <div className="row mt-20">
                <div className="col-xl-6 col-lg-6 col-sm-12">
                  <div className="ffc-email-intg-wr">
                    <div className="ffc-email-intg-encap">
                      <div className="ffc-email-intg-img">
                        <img src="/images/default.png" alt="" />
                      </div>
                      <div className="ffc-email-intg-info">
                        <span className="ffc-email-intg-name">
                          demo@company.com
                        </span>
                        <button type="button" className="ffc-btn" onClick={() => toggleSettings('email1')}>Setting</button>
                      </div>
                    </div>
                    {settingsVisibility['email1'] && (
                      <div className="ffc-email-intg-input">
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Account Name
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="text" placeholder="Enter your account name" name="title" value="demo@company.com" autoComplete="off" />
                        </div>
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">SMTP
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="text" placeholder="Enter your SMTP" name="title" value="SMTP" autoComplete="off" />
                        </div>
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Password
                            <span className="text-danger">*</span>
                          </label>
                          <input className="ffc-custom-input require" data-error="Title is required" type="password" placeholder="Enter your password" name="title" value="Password" autoComplete="off" />
                        </div>
                        <div className="ffc-btn-iintg-infon">
                          <button type="button" className="ffc-btn ffc-btn-01">Disable</button>
                          <button type="button" className="ffc-btn ffc-btn-02">Remove</button>
                          <button type="button" className="ffc-btn ffc-btn-03">Update</button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Popup isOpen={popupType === 'addAutoresponder'} onClose={closePopup}>
        <h2>Add Autoresponder</h2>
        {/* Add  content */}
      </Popup>
      <Popup isOpen={popupType === 'addPayment'} onClose={closePopup}>
        <h2>Add Payment</h2>
        {/* Add  content */}
      </Popup>
      <Popup isOpen={popupType === 'createEmail'} onClose={closePopup}>
        <div className="row">

          <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="ffc-main-input ffc-require">
              <label className="ffc-main-label">Email Type</label>
              <select className="ffc-select-wr" name="state">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="ffc-main-input ffc-require">
              <label className="ffc-main-label">Email Template Name</label>
              <input
                className="ffc-custom-input require"
                data-error="Title is required"
                type="text"
                placeholder="Email Template Name"
                name="title"
                value=""
                onChange=""
                autoComplete="off"
              />
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="ffc-main-input ffc-require">
              <label className="ffc-main-label">Choose Email Template
              </label>
              <select className="ffc-select-wr" name="state">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
          </div>

          <div className="col-xl-6 col-lg-6 col-sm-12">
            <div className="ffc-main-input ffc-require">
              <label className="ffc-main-label">Email Subject</label>
              <input
                className="ffc-custom-input require"
                data-error="Title is required"
                type="text"
                placeholder="Email Subject"
                name="title"
                value=""
                onChange=""
                autoComplete="off"
              />
            </div>
          </div>
        </div>
        {/* Add  content */}
      </Popup>
    </div>
  );
};

export default Settings;