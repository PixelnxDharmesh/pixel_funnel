import React, { useState } from 'react';

function CardsList() {
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    document.body.classList.toggle('popup__show', !isModalOpen);
  };

  return (
    <div className="ffc-cards-wrapper">
      <div className="ffc-container">
        <div className="ffc-head-flex">
          <div className="ffc-section-heading">
            <h3 className="ffc-heading">My Products 3</h3>
          </div>
          <div className="ffc-header-btn ffc-btn_1">
            <button className="ffc-btn" onClick={toggleModal}>Create</button>
          </div>
        </div>
        <div className="ffc-cards-item-wr">
          {/* Card items here */}
          <div className="ffc-cards-item-nodata">
            <img src="assets/images/no-data.png" alt="nodata" />
            <p>No data found</p>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="ffc-modal">
          <div className="ffc-popup_box ffc-modal_1 popup_box_show">
            <div className="ffc-over" onClick={toggleModal}></div>
            <div className="ffc-popup_wr">
              <div className="ffc-popup_full">
                <div className="ffc-popup_inner">
                  <form className="ffc-popup_content" action="" method="">
                    <div className="row">
                      <div className="col-xl-6 col-lg-6 col-sm-12">
                        <div className="ffc-main-input ffc-require">
                          <label className="ffc-main-label">Title</label>
                          <input
                            className="ffc-custom-input require"
                            data-error="Title is required"
                            type="text"
                            placeholder="Enter title"
                            name="title"
                            autoComplete="off"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="ffc-popup_btn">
                      <input className="ffc-btn ffc-input_btn" type="submit" value="Create" />
                    </div>
                  </form>
                </div>
                <div className="ffc-btn_close" onClick={toggleModal}>
                  <span>
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2.84392 29.8121C2.10843 29.8549 1.38508 29.6103 0.826394 29.1301C-0.275383 28.0218 -0.275383 26.2317 0.826394 25.1234L24.9517 0.997988C26.0977 -0.0743124 27.8958 -0.0147039 28.9681 1.13124C29.9378 2.16752 29.9943 3.76029 29.1005 4.86263L4.83299 29.1301C4.28157 29.6034 3.56976 29.8475 2.84392 29.8121Z" fill="black"></path>
                      <path d="M26.9409 29.8121C26.1954 29.809 25.481 29.513 24.9517 28.9881L0.826287 4.8626C-0.194453 3.67062 -0.0556779 1.87674 1.13631 0.855908C2.20019 -0.0551594 3.7692 -0.0551594 4.83298 0.855908L29.1004 24.9813C30.2461 26.0539 30.3053 27.8522 29.2328 28.9978C29.1901 29.0434 29.146 29.0875 29.1004 29.1302C28.8065 29.3858 28.463 29.5783 28.0915 29.6956C27.72 29.8129 27.3284 29.8526 26.9409 29.8121Z" fill="black"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CardsList;