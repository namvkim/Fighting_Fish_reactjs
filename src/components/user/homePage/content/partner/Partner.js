
import React from 'react';
import PropTypes from 'prop-types';
import Layout_homePage from '../layout/Layout_homePage';

function Partner(props) {

  return (
    <Layout_homePage title="Our Partners" id="partner">
      <div className="multi-carousel px-3" data-items={5} data-interval="4000">
        <div className="multi-carousel-inner">
          <div className="multi-carousel-item">
            <div className="partner_item">
              <img src="./assets/img/partner/vi_FondationAmanjaya.png" alt="" />
            </div>
          </div>
          <div className="multi-carousel-item">
            <div className="partner_item">
              <img src="./assets/img/partner/vi_Blancmesnil.png" alt="" />
            </div>
          </div>
          <div className="multi-carousel-item">
            <div className="partner_item">
              <img src="./assets/img/partner/vi_DVT.png" alt="" />
            </div>
          </div>
          <div className="multi-carousel-item">
            <div className="partner_item">
              <img src="./assets/img/partner/vi_Enouvo.png" alt="" />
            </div>
          </div>
          <div className="multi-carousel-item">
            <div className="partner_item">
              <img src="./assets/img/partner/vi_Microsoft.jpg" alt="" />
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" tabIndex={0} role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </a>
        <a className="carousel-control-next" tabIndex={0} role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </a>
      </div>
    </Layout_homePage>

  );
}

export default Partner;