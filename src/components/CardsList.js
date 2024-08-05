import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CardsList() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [products, setProducts] = useState([]);
  const [newProductName, setNewProductName] = useState('');
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('tab1');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isProductPageVisible, setProductPageVisible] = useState(true);
  const [visibleOptionsProductId, setVisibleOptionsProductId] = useState(null);
  const [isViewModalOpen, setViewModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    document.body.classList.toggle('popup-show', !isModalOpen);
  };

  const toggleEditModal = (product) => {
    setSelectedProduct(product);
    setEditModalOpen(true);
    setProductPageVisible(false);
    document.body.classList.toggle('popup-show', true);
  };

  const handleBackButtonClick = () => {
    setEditModalOpen(false);
    setProductPageVisible(true);
    document.body.classList.toggle('popup-show', false);
  };

  const handleInputChange = (e) => {
    setNewProductName(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newProductName.trim()) {
      const newProduct = {
        id: products.length + 1,
        name: newProductName,
        type: 'Digital',
        createdOn: new Date().toLocaleString(),
      };
      setProducts([...products, newProduct]);
      setNewProductName('');
      toggleModal();
    }
  };

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const toggleOptions = (productId) => {
    setVisibleOptionsProductId(visibleOptionsProductId === productId ? null : productId);
  };

  const handleViewButtonClick = (product) => {
    setSelectedProduct(product);
    setViewModalOpen(true);
    document.body.classList.toggle('popup-show', true);
  };

  const closeViewModal = () => {
    setViewModalOpen(false);
    document.body.classList.toggle('popup-show', false);
  };

  return (
    <div className="ffc-cards-wrapper">
      <div className="ffc-container">
        {isProductPageVisible && (
          <>
            <div className="ffc-head-flex">
              <div className="ffc-section-heading">
                <a href="" class="ffc-back-btn" onClick={handleBackButtonClick}>
                  <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0"
                    viewBox="0 0 447.243 447.243">
                    <g>
                      <path
                        d="M420.361 192.229a31.967 31.967 0 0 0-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0 0 18.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 0 0-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 0 0 2.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 0 0-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z"
                        data-original="#000000"></path>
                    </g>
                  </svg>
                </a>
                <h3 class="ffc-heading">My Products</h3>
              </div>
              <div className="ffc-header-btn ffc-btn_1">
                <button className="ffc-btn" onClick={toggleModal}>Create New Product</button>
              </div>
            </div>

            <div class="ffc-section-heading"></div>

            <div className="ffc-cards-item-wr">
              {products.length > 0 ? (
                products.map((product) => (
                  <div className="ffc-cards-item" key={product.id}>
                    <div className="ffc-cards-item-image">
                      <a href="index.html">
                        <img src="/images/placeholder_bg.png" alt="card_placeholder" />
                      </a>
                      <div className="ffc-tag-product">
                        Live
                      </div>
                    </div>
                    <div className="ffc-cards-item-details">
                      <h3 className="ffc-heading">{product.name}</h3>
                      <div className="ffc-cards-dots" onClick={() => toggleOptions(product.id)}>
                        <div className={`ffc-cardOver-list ${visibleOptionsProductId === product.id ? 'ffc-show-list' : ''}`}>
                          <ul>
                            <li><a href="">Clone</a></li>
                            <li><a href="">Delete</a></li>
                          </ul>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="17" fill="#7D809D">
                          <path d="M4.264.789a2 2 0 0 1-2.828 2.828A2 2 0 0 1 4.264.789zm0 6a2 2 0 1 1-2.828 2.828 2 2 0 1 1 2.828-2.828zm0 6a2 2 0 0 1-2.828 2.829 2 2 0 0 1 2.828-2.828z" fill="#7D809D" />
                        </svg>
                      </div>
                      <ul className="ffc-product-box">
                        <li>
                          <p>Product Type</p>
                          <p><span>{product.type}</span></p>
                        </li>
                        <li>
                          <p>Created on</p>
                          <p><span>{product.createdOn}</span></p>
                        </li>
                        <li>
                          <p>Product Id</p>
                          <p><span>{product.id}</span></p>
                        </li>
                      </ul>
                    </div>
                    <div className="ffc-btn-wr">
                      <button className="ffc-btn ffc-btn-02" onClick={() => toggleEditModal(product)}>Edit</button>
                      <button className="ffc-btn ffc-btn-01" onClick={() => handleViewButtonClick(product)}>View</button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="ffc-cards-item-nodata">
                  <img src="/images/no-data.png" alt="nodata" />
                  <p>No data found</p>
                </div>
              )}
            </div>
          </>
        )}

        {isModalOpen && (
          <div className="ffc-modal">
            <div className="ffc-popup-box ffc-modal-1 popup-box-show">
              <div className="ffc-over" onClick={toggleModal}></div>
              <div className="ffc-popup-wr">
                <div className="ffc-popup-full">
                  <div className="ffc-popup-inner">
                    <form className="ffc-popup-content" onSubmit={handleFormSubmit}>
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-sm-12">
                          <div className="ffc-main-input ffc-require">
                            <label className="ffc-main-label">Title</label>
                            <input
                              className="ffc-custom-input require"
                              data-error="Title is required"
                              type="text"
                              placeholder="Enter Product Name"
                              name="title"
                              value={newProductName}
                              onChange={handleInputChange}
                              autoComplete="off"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row ffc-justify-center">
                        <div className="ffc-popupFooter ffc-btn-groups ffc-mt">
                          <button type="button" className="ffc-btn ffc-btn-02 ffc-mr" onClick={toggleModal}>Cancel</button>
                          <button type="submit" className="ffc-btn ffc-btn-01">Create</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isEditModalOpen && (
          <div className="ffc-modal">
            <div className="ffc-popup-box ffc-modal-1 popup-box-show">
              <div className="ffc-over" onClick={handleBackButtonClick}></div>
              <div className="ffc-popup-wr">
                <div className="ffc-popup-full">
                  <div className="ffc-popup-inner">
                    <div className="ffc-popup-content">
                      <div className="ffc-tab-head">
                        <ul className="ffc-tab-head-list">
                          <li
                            className={activeTab === 'tab1' ? 'ffc-tab-active' : ''}
                            onClick={() => handleTabClick('tab1')}
                          >
                            General
                          </li>
                          <li
                            className={activeTab === 'tab2' ? 'ffc-tab-active' : ''}
                            onClick={() => handleTabClick('tab2')}
                          >
                            Settings
                          </li>
                        </ul>
                      </div>
                      <div className="ffc-tab-body">
                        {activeTab === 'tab1' && (
                          <div className="ffc-tab-content">
                            <h4>General Information</h4>
                            <p>Name: {selectedProduct.name}</p>
                            <p>Type: {selectedProduct.type}</p>
                            <p>Created On: {selectedProduct.createdOn}</p>
                          </div>
                        )}
                        {activeTab === 'tab2' && (
                          <div className="ffc-tab-content">
                            <h4>Settings</h4>
                            <p>Settings for {selectedProduct.name}</p>
                          </div>
                        )}
                      </div>
                    </div>
                    <div className="ffc-popupFooter ffc-btn-groups ffc-mt">
                      <button type="button" className="ffc-btn ffc-btn-02 ffc-mr" onClick={handleBackButtonClick}>Back</button>
                      <button type="button" className="ffc-btn ffc-btn-01">Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {isViewModalOpen && (
          <div className="ffc-modal">
            <div className="ffc-popup-box ffc-modal-1 popup-box-show">
              <div className="ffc-over" onClick={closeViewModal}></div>
              <div className="ffc-popup-wr">
                <div className="ffc-popup-full">
                  <div className="ffc-popup-inner">
                    <div className="ffc-popup-content">
                      <h4>Product Details</h4>
                      <p>Name: {selectedProduct.name}</p>
                      <p>Type: {selectedProduct.type}</p>
                      <p>Created On: {selectedProduct.createdOn}</p>
                    </div>
                    <div className="ffc-popupFooter ffc-btn-groups ffc-mt">
                      <button type="button" className="ffc-btn ffc-btn-02 ffc-mr" onClick={closeViewModal}>Close</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CardsList;


















