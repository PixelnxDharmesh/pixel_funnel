// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function CardsList() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [newProductName, setNewProductName] = useState('');
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('tab1');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isProductPageVisible, setProductPageVisible] = useState(true);
//   const [visibleOptionsProductId, setVisibleOptionsProductId] = useState(null);

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen);
//     document.body.classList.toggle('popup-show', !isModalOpen);
//   };

//   const toggleEditModal = (product) => {
//     setSelectedProduct(product);
//     setEditModalOpen(true);
//     setProductPageVisible(false);
//     document.body.classList.toggle('popup-show', true);
//   };

//   const handleBackButtonClick = () => {
//     setEditModalOpen(false);
//     setProductPageVisible(true);
//     document.body.classList.toggle('popup-show', false);
//   };

//   const handleInputChange = (e) => {
//     setNewProductName(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (newProductName.trim()) {
//       const newProduct = {
//         id: products.length + 1,
//         name: newProductName,
//         type: 'Digital',
//         createdOn: new Date().toLocaleString(),
//       };
//       setProducts([...products, newProduct]);
//       setNewProductName('');
//       toggleModal();
//     }
//   };

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

//   const toggleOptions = (productId) => {
//     setVisibleOptionsProductId(visibleOptionsProductId === productId ? null : productId);
//   };

//   return (
//     <div className="ffc-cards-wrapper">
//       <div className="ffc-container">
//         {isProductPageVisible && (
//           <>
//             <div className="ffc-head-flex">
//               <div className="ffc-section-heading">
//               <Link to="/" className="ffc-back-btn">
//               <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0"
//                 viewBox="0 0 447.243 447.243">
//                 <g>
//                   <path
//                     d="M420.361 192.229a31.967 31.967 0 0 0-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0 0 18.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 0 0-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 0 0 2.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 0 0-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z"
//                     data-original="#000000"></path>
//                 </g>
//               </svg>
//             </Link>
//                 <h3 className="ffc-heading">My Products</h3>
//               </div>
//               <div className="ffc-header-btn ffc-btn_1">
//                 <button className="ffc-btn" onClick={toggleModal}>Create New Product</button>
//               </div>
//             </div>
            
//             <div className="ffc-cards-item-wr">
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <div className="ffc-cards-item" key={product.id}>
//                     <div className="ffc-cards-item-image">
//                       <a href="index.html">
//                         <img src="/images/placeholder_bg.png" alt="card_placeholder" />
//                       </a>
//                       <div className="ffc-tag-product">
//                         Live
//                       </div>
//                     </div>
//                     <div className="ffc-cards-item-details">
//                       <h3 className="ffc-heading">{product.name}</h3>
//                       <div className="ffc-cards-dots" onClick={() => toggleOptions(product.id)}>
//                         <div className={`ffc-cardOver-list ${visibleOptionsProductId === product.id ? 'ffc-show-list' : ''}`}>
//                           <ul>
//                             <li><a href="">Clone</a></li>
//                             <li><a href="">Delete</a></li>
//                           </ul>
//                         </div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="5" height="17" fill="#7D809D">
//                           <path d="M4.264.789a2 2 0 0 1-2.828 2.828A2 2 0 0 1 4.264.789zm0 6a2 2 0 1 1-2.828 2.828 2 2 0 1 1 2.828-2.828zm0 6a2 2 0 0 1-2.828 2.829 2 2 0 0 1 2.828-2.828z" fill="#7D809D" />
//                         </svg>
//                       </div>
//                       <ul className="ffc-product-box">
//                         <li>
//                           <p>Product Type</p>
//                           <p><span>{product.type}</span></p>
//                         </li>
//                         <li>
//                           <p>Created on</p>
//                           <p><span>{product.createdOn}</span></p>
//                         </li>
//                         <li>
//                           <p>Product Id</p>
//                           <p><span>{product.id}</span></p>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="ffc-btn-wr">
//                       <button className="ffc-btn ffc-btn-02" onClick={() => toggleEditModal(product)}>Edit</button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="ffc-cards-item-nodata">
//                   <img src="/images/no-data.png" alt="nodata" />
//                   <p>No data found</p>
//                 </div>
//               )}
//             </div>
//           </>
//         )}

//         {isModalOpen && (
//           <div className="ffc-modal">
//             <div className="ffc-popup-box ffc-modal-1 popup-box-show">
//               <div className="ffc-over" onClick={toggleModal}></div>
//               <div className="ffc-popup-wr">
//                 <div className="ffc-popup-full">
//                   <div className="ffc-popup-inner">
//                     <form className="ffc-popup-content" onSubmit={handleFormSubmit}>
//                       <div className="row">
//                         <div className="col-xl-6 col-lg-6 col-sm-12">
//                           <div className="ffc-main-input ffc-require">
//                             <label className="ffc-main-label">Title</label>
//                             <input
//                               className="ffc-custom-input require"
//                               data-error="Title is required"
//                               type="text"
//                               placeholder="Enter Product Name"
//                               name="title"
//                               value={newProductName}
//                               onChange={handleInputChange}
//                               autoComplete="off"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="ffc-popup-btn">
//                         <input className="ffc-btn ffc-input-btn" type="submit" value="Create" />
//                       </div>
//                     </form>
//                   </div>
//                   <div className="ffc-btn-close" onClick={toggleModal}>
//                     <span>
//                       <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M2.84392 29.8121C2.10843 29.8121 1.37343 29.5351 0.81693 28.9781C-0.272569 27.8886 -0.272569 26.1114 0.81693 25.0219L24.3724 1.46644C25.4614 0.377442 27.2391 0.377442 28.3281 1.46644C29.4171 2.55594 29.4171 4.33369 28.3281 5.42269L4.77255 28.9781C4.21555 29.5351 3.47955 29.8121 2.84392 29.8121Z" fill="black"></path>
//                         <path d="M27.1561 29.8121C26.5205 29.8121 25.7845 29.5351 25.2275 28.9781L1.67206 5.42269C0.582556 4.33369 0.582556 2.55594 1.67206 1.46644C2.76106 0.377442 4.53881 0.377442 5.62781 1.46644L29.1833 25.0219C30.2723 26.1114 30.2723 27.8886 29.1833 28.9781C28.6263 29.5351 27.8913 29.8121 27.1561 29.8121Z" fill="black"></path>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {isEditModalOpen && selectedProduct && (
//           <div className="ffc-modal">
//             <div className="ffc-popup-box ffc-modal-1 popup-box-show">
//               <div className="ffc-over" onClick={handleBackButtonClick}></div>
//               <div className="ffc-popup-wr ffc-width-large">
//                 <div className="ffc-popup-full">
//                   <div className="ffc-popup-inner">
//                     <div className="ffc-popup-content">
//                       <div className="ffc-tabs-wr">
//                         <div className="ffc-tabs-header">
//                           <div
//                             className={`ffc-tab-item ${activeTab === 'tab1' ? 'ffc-tab-active' : ''}`}
//                             onClick={() => handleTabClick('tab1')}
//                           >
//                             Product Info
//                           </div>
//                           <div
//                             className={`ffc-tab-item ${activeTab === 'tab2' ? 'ffc-tab-active' : ''}`}
//                             onClick={() => handleTabClick('tab2')}
//                           >
//                             Settings
//                           </div>
//                           <div
//                             className={`ffc-tab-item ${activeTab === 'tab3' ? 'ffc-tab-active' : ''}`}
//                             onClick={() => handleTabClick('tab3')}
//                           >
//                             Inventory
//                           </div>
//                           <div
//                             className={`ffc-tab-item ${activeTab === 'tab4' ? 'ffc-tab-active' : ''}`}
//                             onClick={() => handleTabClick('tab4')}
//                           >
//                             Shipping
//                           </div>
//                         </div>
//                         <div className="ffc-tabs-content">
//                           {activeTab === 'tab1' && (
//                             <div className="ffc-tab-panel">
//                               <h2>Product Info</h2>
//                               {/* Your product info form here */}
//                               <p>Details about the product...</p>
//                             </div>
//                           )}
//                           {activeTab === 'tab2' && (
//                             <div className="ffc-tab-panel">
//                               <h2>Settings</h2>
//                               {/* Your settings form here */}
//                               <p>Settings for the product...</p>
//                             </div>
//                           )}
//                           {activeTab === 'tab3' && (
//                             <div className="ffc-tab-panel">
//                               <h2>Inventory</h2>
//                               {/* Your inventory form here */}
//                               <p>Inventory details...</p>
//                             </div>
//                           )}
//                           {activeTab === 'tab4' && (
//                             <div className="ffc-tab-panel">
//                               <h2>Shipping</h2>
//                               {/* Your shipping form here */}
//                               <p>Shipping details...</p>
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="ffc-btn-close" onClick={handleBackButtonClick}>
//                       <span>
//                         <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <path d="M2.84392 29.8121C2.10843 29.8121 1.37343 29.5351 0.81693 28.9781C-0.272569 27.8886 -0.272569 26.1114 0.81693 25.0219L24.3724 1.46644C25.4614 0.377442 27.2391 0.377442 28.3281 1.46644C29.4171 2.55594 29.4171 4.33369 28.3281 5.42269L4.77255 28.9781C4.21555 29.5351 3.47955 29.8121 2.84392 29.8121Z" fill="black"></path>
//                           <path d="M27.1561 29.8121C26.5205 29.8121 25.7845 29.5351 25.2275 28.9781L1.67206 5.42269C0.582556 4.33369 0.582556 2.55594 1.67206 1.46644C2.76106 0.377442 4.53881 0.377442 5.62781 1.46644L29.1833 25.0219C30.2723 26.1114 30.2723 27.8886 29.1833 28.9781C28.6263 29.5351 27.8913 29.8121 27.1561 29.8121Z" fill="black"></path>
//                         </svg>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CardsList;



// //-----------------------------------------------------


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function CardsList() {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const [products, setProducts] = useState([]);
//   const [newProductName, setNewProductName] = useState('');
//   const [isEditModalOpen, setEditModalOpen] = useState(false);
//   const [activeTab, setActiveTab] = useState('tab1');
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [isProductPageVisible, setProductPageVisible] = useState(true);
//   const [visibleOptionsProductId, setVisibleOptionsProductId] = useState(null);

//   const toggleModal = () => {
//     setModalOpen(!isModalOpen);
//     document.body.classList.toggle('popup-show', !isModalOpen);
//   };

//   const toggleEditModal = (product) => {
//     setSelectedProduct(product);
//     setEditModalOpen(true);
//     setProductPageVisible(false);
//     document.body.classList.toggle('popup-show', true);
//   };

//   const handleBackButtonClick = () => {
//     setEditModalOpen(false);
//     setProductPageVisible(true);
//     document.body.classList.toggle('popup-show', false);
//   };

//   const handleInputChange = (e) => {
//     setNewProductName(e.target.value);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     if (newProductName.trim()) {
//       const newProduct = {
//         id: products.length + 1,
//         name: newProductName,
//         type: 'Digital',
//         createdOn: new Date().toLocaleString(),
//       };
//       setProducts([...products, newProduct]);
//       setNewProductName('');
//       toggleModal();
//     }
//   };

//   const handleTabClick = (tabId) => {
//     setActiveTab(tabId);
//   };

  
//   const toggleOptions = (productId) => {
//     setVisibleOptionsProductId(visibleOptionsProductId === productId ? null : productId);
//   };

//   return (
//     <div className="ffc-cards-wrapper">
//       <div className="ffc-container">
//         {isProductPageVisible && (
//           <>
//             <div className="ffc-head-flex">
//               <div className="ffc-section-heading">
//               <Link to="/" className="ffc-back-btn">
//               <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0"
//                 viewBox="0 0 447.243 447.243">
//                 <g>
//                   <path
//                     d="M420.361 192.229a31.967 31.967 0 0 0-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0 0 18.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 0 0-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 0 0 2.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 0 0-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z"
//                     data-original="#000000"></path>
//                 </g>
//               </svg>
//             </Link>
//                 <h3 className="ffc-heading">My Products</h3>
//               </div>
//               <div className="ffc-header-btn ffc-btn_1">
//                 <button className="ffc-btn" onClick={toggleModal}>Create New Product</button>
//               </div>
//             </div>
            
//             <div className="ffc-cards-item-wr">
//               {products.length > 0 ? (
//                 products.map((product) => (
//                   <div className="ffc-cards-item" key={product.id}>
//                     <div className="ffc-cards-item-image">
//                       <a href="index.html">
//                         <img src="/images/placeholder_bg.png" alt="card_placeholder" />
//                       </a>
//                       <div className="ffc-tag-product">
//                         Live
//                       </div>
//                     </div>
//                     <div className="ffc-cards-item-details">
//                       <h3 className="ffc-heading">{product.name}</h3>
//                       <div className="ffc-cards-dots" onClick={() => toggleOptions(product.id)}>
//                         <div className={`ffc-cardOver-list ${visibleOptionsProductId === product.id ? 'ffc-show-list' : ''}`}>
//                           <ul>
//                             <li><a href="">Clone</a></li>
//                             <li><a href="">Delete</a></li>
//                           </ul>
//                         </div>
//                       <div class="ffc-cardOver-list ffc-show-list">
//                         <ul>
//                              <li><a href="">Clone</a></li>
//                               <li><a href="">Delete</a></li>
//                             </ul>
//                         </div>
//                         <svg xmlns="http://www.w3.org/2000/svg" width="5" height="17" fill="#7D809D">
//                           <path d="M4.264.789a2 2 0 0 1-2.828 2.828A2 2 0 0 1 4.264.789zm0 6a2 2 0 1 1-2.828 2.828 2 2 0 1 1 2.828-2.828zm0 6a2 2 0 0 1-2.828 2.829 2 2 0 0 1 2.828-2.828z" fill="#7D809D" />
//                         </svg>
//                       </div>
//                       <ul className="ffc-product-box">
//                         <li>
//                           <p>Product Type</p>
//                           <p><span>{product.type}</span></p>
//                         </li>
//                         <li>
//                           <p>Created on</p>
//                           <p><span>{product.createdOn}</span></p>
//                         </li>
//                         <li>
//                           <p>Product Id</p>
//                           <p><span>{product.id}</span></p>
//                         </li>
//                       </ul>
//                     </div>
//                     <div className="ffc-btn-wr">
//                       <button className="ffc-btn ffc-btn-02" onClick={() => toggleEditModal(product)}>Edit</button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="ffc-cards-item-nodata">
//                   <img src="/images/no-data.png" alt="nodata" />
//                   <p>No data found</p>
//                 </div>
//               )}
//             </div>
//           </>
//         )}

//         {isModalOpen && (
//           <div className="ffc-modal">
//             <div className="ffc-popup-box ffc-modal-1 popup-box-show">
//               <div className="ffc-over" onClick={toggleModal}></div>
//               <div className="ffc-popup-wr">
//                 <div className="ffc-popup-full">
//                   <div className="ffc-popup-inner">
//                     <form className="ffc-popup-content" onSubmit={handleFormSubmit}>
//                       <div className="row">
//                         <div className="col-xl-6 col-lg-6 col-sm-12">
//                           <div className="ffc-main-input ffc-require">
//                             <label className="ffc-main-label">Title</label>
//                             <input
//                               className="ffc-custom-input require"
//                               data-error="Title is required"
//                               type="text"
//                               placeholder="Enter Product Name"
//                               name="title"
//                               value={newProductName}
//                               onChange={handleInputChange}
//                               autoComplete="off"
//                             />
//                           </div>
//                         </div>
//                       </div>
//                       <div className="ffc-popup-btn">
//                         <input className="ffc-btn ffc-input-btn" type="submit" value="Create" />
//                       </div>
//                     </form>
//                   </div>
//                   <div className="ffc-btn-close" onClick={toggleModal}>
//                     <span>
//                       <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M2.84392 29.8121C2.10843 29.8549 1.38508 29.6103 0.826394 29.1301C-0.275383 28.0218 -0.275383 26.2317 0.826394 25.1234L24.9517 0.997988C26.0977 -0.0743124 27.8958 -0.0147039 28.9681 1.13124C29.9378 2.16752 29.9943 3.76029 29.1005 4.86263L4.83299 29.1301C4.28157 29.6034 3.56976 29.8475 2.84392 29.8121Z" fill="black"></path>
//                         <path d="M26.9409 29.8121C26.1954 29.809 25.481 29.513 24.9517 28.9881L0.826287 4.8626C-0.194453 3.67062 -0.0556779 1.87674 1.13631 0.855908C2.20019 -0.0551594 3.7692 -0.0551594 4.83298 0.855908L29.1004 24.9813C30.2461 26.0539 30.3053 27.8522 29.2328 28.9978C29.1901 29.0434 29.146 29.0875 29.1004 29.1302C28.8065 29.3858 28.463 29.5783 28.0915 29.6956C27.72 29.8129 27.3284 29.8526 26.9409 29.8121Z" fill="black"></path>
//                       </svg>
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {isEditModalOpen && selectedProduct && (
//           <div className="ffc-tab-wrapper">
//             <div className="ffc-container">

//             <div class="ffc-section-heading">
//                 <a href="" class="ffc-back-btn" onClick={handleBackButtonClick}>
//                     <svg height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0"
//                         viewBox="0 0 447.243 447.243">
//                         <g>
//                             <path
//                                 d="M420.361 192.229a31.967 31.967 0 0 0-5.535-.41H99.305l6.88-3.2a63.998 63.998 0 0 0 18.08-12.8l88.48-88.48c11.653-11.124 13.611-29.019 4.64-42.4-10.441-14.259-30.464-17.355-44.724-6.914a32.018 32.018 0 0 0-3.276 2.754l-160 160c-12.504 12.49-12.515 32.751-.025 45.255l.025.025 160 160c12.514 12.479 32.775 12.451 45.255-.063a32.084 32.084 0 0 0 2.745-3.137c8.971-13.381 7.013-31.276-4.64-42.4l-88.32-88.64a64.002 64.002 0 0 0-16-11.68l-9.6-4.32h314.24c16.347.607 30.689-10.812 33.76-26.88 2.829-17.445-9.019-33.88-26.464-36.71z"
//                                 data-original="#000000"></path>
//                         </g>
//                     </svg>
//                 </a>
//                 <h3 class="ffc-heading">{selectedProduct.name}</h3>
//             </div>
//               <form className="ffc-tab-wr" action="" method="">
//                 <div className="ffc-tab-list tab-menu">
//                   <ul>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab1' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab1')} data-id="tab1">General Settings</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab2' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab2')} data-id="tab2">Payment Options</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab3' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab3')} data-id="tab3">Price</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab4' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab4')} data-id="tab4">Page Script</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab5' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab5')} data-id="tab5">Checkout/Thank You</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab6' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab6')} data-id="tab6">Cart Abandonment</a>
//                     </li>
//                     <li>
//                       <a href="javascript:;" className={`tab-a ${activeTab === 'tab7' ? 'active-a' : ''}`} onClick={() => handleTabClick('tab7')} data-id="tab7">Statistics</a>
//                     </li>
//                   </ul>

//                   <div className="ffc-popup-btn mt-20">
//                     <input className="ffc-btn" type="submit" value="Save" />
//                   </div>
//                 </div>
//                 <div className="ffc-tab-item tab-deta">
//                   <div className={`tab ${activeTab === 'tab1' ? 'tab-active' : ''}`} data-id="tab1">
//                     <div className="row">
//                       <div className="col-xl-6 col-lg-6 col-sm-12">
//                         <div className="ffc-main-input ffc-require">
//                           <label className="ffc-main-label">Title</label>
//                           <input
//                             className="ffc-custom-input require"
//                             data-error="Title is required"
//                             type="text"
//                             placeholder="Enter title"
//                             name="title"
//                             value={selectedProduct.name}
//                             autoComplete="off"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className={`tab ${activeTab === 'tab2' ? 'tab-active' : ''}`} data-id="tab2">
//                       <div class="row">
//                             <div class="col-xl-6 col-lg-6 col-sm-12">
//                                 <div class="ffc-email-intg-wr">
//                                     <div class="ffc-email-intg-encap">
//                                         <div class="ffc-email-intg-img">
//                                             <img src="/images/stripe.png" alt="" />
//                                         </div>
//                                         <div class="ffc-email-intg-info">
//                                             <span class="ffc-email-intg-name">
//                                                 Company
//                                             </span>
//                                             <button class="ffc-btn ffc-btn-03">Disconnected</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                   </div>
//                   <div className={`tab ${activeTab === 'tab3' ? 'tab-active' : ''}`} data-id="tab3">
//                     <div className="col-xl-6 col-lg-6 col-sm-12">
//                       <div className="ffc-main-input ffc-require">
//                         <label className="ffc-main-label">Choose the currency for the product*</label>
//                         <input
//                           className="ffc-custom-input require"
//                           data-error="Currency is required"
//                           type="text"
//                           placeholder="Enter currency"
//                           name="currency"
//                           autoComplete="off"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className={`tab ${activeTab === 'tab4' ? 'tab-active' : ''}`} data-id="tab4">
//                     <h2>heading of tab 4</h2>
//                     <p>Content of tab 4</p>
//                   </div>
//                   <div className={`tab ${activeTab === 'tab5' ? 'tab-active' : ''}`} data-id="tab5">
//                     <h2>heading of tab 5</h2>
//                     <p>Content of tab 5</p>
//                   </div>
//                   <div className={`tab ${activeTab === 'tab6' ? 'tab-active' : ''}`} data-id="tab6">
//                     <h2>heading of tab 6</h2>
//                     <p>Content of tab 6</p>
//                   </div>
//                   <div className={`tab ${activeTab === 'tab7' ? 'tab-active' : ''}`} data-id="tab7">
//                     <h2>heading of tab 7</h2>
//                     <p>Content of tab 7</p>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default CardsList;
